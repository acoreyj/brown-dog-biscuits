<script context="module" lang="ts">
	import type { BGIcon, ScreenSettings, Setting } from './Background.svelte';
</script>

<script lang="ts">
	import DoodleHearts from './icons/kld-Doodle-Hearts_1.svelte';
	import HeartFill from './icons/heart_fill.svelte';
	import TwoToneHeart from './icons/twoToneHeartStatic.svelte';
	import { cssStringify } from '../utils';
	export let bg: BGIcon;
	const getSettingClass = (
		size: '' | 'sm' | 'md' | 'lg' | 'xl' | '2xl',
		pos?: Setting | 'inherit'
	) => {
		if (pos === 'inherit') {
			return '';
		}
		if (!pos) {
			return size ? `${size}:hidden` : 'hidden';
		}
		return pos;
	};
	const {
		xs: xsSize,
		sm: smSize,
		md: mdSize,
		lg: lgSize,
		xl: xlSize,
		twoxl: twoxlSize
	} = typeof bg.size === 'string'
		? {
				xs: bg.size,
				sm: 'inherit',
				md: 'inherit',
				lg: 'inherit',
				xl: 'inherit',
				twoxl: 'inherit'
			}
		: bg.size || ({} as ScreenSettings);
	const xsClass = getSettingClass('', xsSize);
	const smClass = getSettingClass('sm', smSize);
	const mdClass = getSettingClass('md', mdSize);
	const lgClass = getSettingClass('lg', lgSize);
	const xlClass = getSettingClass('xl', xlSize);
	const twoxlClass = getSettingClass('2xl', twoxlSize);
	let icon = '';
	switch (bg.name) {
		case 'paw-prints':
			icon = 'icon-[fluent-emoji-high-contrast--paw-prints]';
			break;
		case 'heart-suit':
			icon = 'icon-[bi--suit-heart]';
			break;
		case 'heart':
			icon = 'icon-[mdi--heart]';
			break;
		case 'paw-two-tone':
			icon = 'icon-[solar--paw-line-duotone]';
			break;
		case 'paw-print':
			icon = 'icon-[mdi--paw-outline]';
			break;
		case 'paw-fill':
			icon = 'icon-[mdi--paw]';
			break;
	}
	const cls = `bg-icon absolute ${bg.classes || ''} ${
		bg.color
	} ${xsClass} ${smClass} ${mdClass} ${lgClass} ${xlClass} ${twoxlClass}`;
</script>

{#if icon}
	<span class="{cls} {icon}" style={cssStringify(bg.style)}></span>
{/if}
{#if bg.name === 'heart-doodle'}
	<span class={cls} style={cssStringify(bg.style)}>
		<DoodleHearts />
	</span>
{/if}
{#if bg.name === 'heart-fill'}
	<span class={cls} style={cssStringify(bg.style)}>
		<HeartFill />
	</span>
{/if}
{#if bg.name === 'heart-two-tone'}
	<span class={cls} style={cssStringify(bg.style)}>
		<TwoToneHeart />
	</span>
{/if}
