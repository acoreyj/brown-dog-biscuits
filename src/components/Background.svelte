<script context="module" lang="ts">
	import JSZip from 'jszip';

	export type BackgroundProps = {
		xMax?: number;
		yMax?: number;
		xStart?: number;
		yStart?: number;
		rotations?: string[];
		icons?: string[];
		textColors?: string[];
		padding?: number;
		maxWidth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
		blank?: {
			left: number;
			top: number;
			width: number;
			height: number;
			circle?: boolean;
			padding?: number;
		};
		flippableIcons?: string[];
		rotateableIcons?: string[];
	};

	export type Setting = string | 'inherit';
	export type ScreenSettings = {
		xs?: Setting;
		sm?: Setting;
		md?: Setting;
		lg?: Setting;
		xl?: Setting;
		twoxl?: Setting;
	};
	export type Icon =
		| 'paw-prints'
		| 'heart-doodle'
		| 'heart'
		| 'paw-two-tone'
		| 'paw-print'
		| 'paw-fill'
		| 'heart-fill'
		| 'heart-suit'
		| 'heart-two-tone';

	export type BGIcon = {
		name: Icon;
		color: string;
		size?: string | ScreenSettings;
		style: { top: string; left: string } & Partial<HTMLDivElement['style']>;
		classes?: string;
	};
	export type AddedIcon = {
		left: number;
		top: number;
		widthAndHeight: number;
		color: string;
		icon: Icon;
		flipped?: boolean;
		rotateClass?: string;
	};
</script>

<script lang="ts">
	import BackgroundIcon from './BackgroundIcon.svelte';
	import { squareIntersectsCircle } from '../utils';
	export let xMax: BackgroundProps['xMax'] = 0;
	export let yMax: BackgroundProps['yMax'] = 0;
	export let maxWidth: BackgroundProps['maxWidth'] = 9;
	export let padding: BackgroundProps['padding'] = undefined;
	export let blank: BackgroundProps['blank'] = undefined;
	export let unzippedIconConfigs: AddedIcon[] | undefined = undefined;
	const generateIconPositions = (options?: {
		xStart?: number;
		yStart?: number;
		xMax?: number;
		yMax?: number;
		padding?: number;
	}) => {
		options = options || {};
		const { xStart, yStart, xMax, yMax, padding } = options;
		const icons: Icon[] = [
			'paw-prints',
			'heart-doodle',
			'heart',
			'paw-two-tone',
			'paw-print',
			'paw-fill',
			'heart-fill',
			'heart-suit',
			'heart-two-tone'
		] as const;

		const addedIcons: AddedIcon[] = [];
		const iconsCount: Record<string, number> = {};
		icons.forEach((icon) => {
			iconsCount[icon] = 0;
		});
		const colorsCount: Record<string, number> = {
			'text-base-300': 0,
			'text-primary': 0,
			'text-secondary': 0,
			'text-accent': 0,
			'text-info': 0
		};
		const rotateClasses = [
			'rotate-6',
			'rotate-12',
			'rotate-45',
			'-rotate-6',
			'-rotate-12',
			'-rotate-45'
		];
		const flipIcons = ['paw-prints', 'heart-fill'];

		const rotateIcons = ['paw-print', 'paw-fill', 'paw-two-tone'];
		const getWidth = () => {
			const min = 32;
			const max = (maxWidth || 9) * 16;
			return Math.floor(Math.random() * ((max - min) / 8) + min / 8) * 8;
		};
		const pad = padding ?? 16;
		let y = yStart || 0;
		while (y < (yMax || 0)) {
			let x = xStart || 0;
			while (x < (xMax || 0)) {
				const width = getWidth();
				const spreadX = (maxWidth || 9) * 7;
				const spreadY = (maxWidth || 9) * (17 - (maxWidth || 9));
				const top = Math.floor(Math.random() * spreadY) + y + Math.floor(Math.random() * pad);
				const left = Math.floor(Math.random() * spreadX) + x + Math.floor(Math.random() * pad);

				const leastColor = Math.min(...Object.values(colorsCount));
				const colorsWithLeast = Object.keys(colorsCount).filter(
					(color) => colorsCount[color] === leastColor
				);
				const color = colorsWithLeast[Math.floor(Math.random() * colorsWithLeast.length)];
				colorsCount[color]++;
				const leastIcon = Math.min(...Object.values(iconsCount));
				const iconsWithLeast = icons.filter((icon) => iconsCount[icon] === leastIcon);
				const icon = iconsWithLeast[Math.floor(Math.random() * iconsWithLeast.length)];
				let flipped = false;
				if (flipIcons.includes(icon) && Math.random() > 0.5) {
					flipped = true;
				}
				let rotateClass = '';
				if (rotateIcons.includes(icon) && Math.random() > 0.2) {
					rotateClass += rotateClasses[Math.floor(Math.random() * rotateClasses.length)];
				}
				iconsCount[icon]++;
				if (left + width < (xMax || 0)) {
					addedIcons.push({
						left,
						top,
						widthAndHeight: width / 16,
						color,
						icon,
						flipped,
						rotateClass
					});
				}
				x = left + width;
			}
			y += 128 + pad;
		}

		return addedIcons;
	};
	let background: BGIcon[] = [];
	let iconConfigs: AddedIcon[] = unzippedIconConfigs || [];
	if (iconConfigs.length === 0) {
		iconConfigs = generateIconPositions({
			xStart: 0,
			yStart: 0,
			xMax,
			yMax,
			padding: padding ?? 16
		});
	}

	const getBackground = () => {
		try {
			const rect = {
				left: 0,
				top: 0,
				width: 0,
				height: 0,
				circle: false,
				...blank
			};

			background = iconConfigs.reduce<BGIcon[]>((acc, pos) => {
				let classes = '';
				const icon = pos.icon;

				const padding = rect.padding ?? 0;
				const width = pos.widthAndHeight * 16;
				const circleX = rect.left + rect.width / 2;
				const circleY = rect.top + rect.height / 2;
				const radius = (rect.width + padding) / 2;

				if (blank) {
					const intersects = squareIntersectsCircle(
						circleX,
						circleY,
						radius,
						pos.left,
						pos.top,
						width
					);
					if (intersects) {
						return acc;
					}
				}

				if (pos.flipped) {
					classes += ' scale-x-[-1]';
				}
				if (pos.rotateClass) {
					classes += ' ' + pos.rotateClass;
				}
				const bgIcon: BGIcon = {
					name: icon,
					color: `${pos.color}`,
					size: `text-[${pos.widthAndHeight}rem]`,
					style: {
						top: `${pos.top}px`,
						left: `${pos.left}px`
					},
					classes
				};
				if (pos.top === 8) {
					console.log('bam', bgIcon);
				}
				acc.push(bgIcon);
				return acc;
			}, []);

			console.log('set state');
		} catch (e) {
			console.error(e);
		}
		return background;
	};
	$: background = iconConfigs.length ? getBackground() : [];
	const zipConfigs = async () => {
		if (iconConfigs.length > 0) {
			const zip = new JSZip();
			console.log('-----------------------');
			const configString = JSON.stringify(iconConfigs);
			zip.file('minified_configs.json', configString);
			const zipped = await zip.generateAsync({
				type: 'base64',
				compression: 'DEFLATE',
				compressionOptions: { level: 9 }
			});
			const original = await (await zip.loadAsync(zipped, { base64: true }))
				.file('minified_configs.json')
				?.async('string');
			console.log(zipped);
			const urlEncoded = encodeURIComponent(zipped);
			console.log('0-0');
			console.log(urlEncoded);
			console.log('0-0');
			console.log(original === configString);
		}
	};
	$: zipConfigs();
</script>

{#if background}
	{#each background as bg}
		<BackgroundIcon {bg} />
	{/each}
{/if}
