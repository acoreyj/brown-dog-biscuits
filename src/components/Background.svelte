<script context="module" lang="ts">
	export type Background = {
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

	function getMaxWidth(innerWidth: number) {
		const breakpoint = getBreakpoint(innerWidth);
		switch (breakpoint) {
			case 'xs':
			case 'sm':
				return 4;
			case 'md':
				return 5;
			case 'lg':
				return 7;
			case 'xl':
			case '2xl':
				return 9;
		}
	}
</script>

<script lang="ts">
	import SuperJSON from 'superjson';

	import { debounce, getBreakpoint } from './daisyui/utils';

	$: innerWidth = 0;
	$: innerHeight = 0;
	$: updateOptions = false;

	$: debouncedInnerWidth = 0;

	let logo: HTMLImageElement;
	let rect: DOMRect;
	let roundedRect: Background['blank'] = undefined;

	const setWindowWidth = () => {
		console.log('changed', { innerWidth, rect, debouncedInnerWidth });
		debouncedInnerWidth = innerWidth;
		if (rect && roundedRect) {
			rect = logo.getBoundingClientRect();
			roundedRect = {
				top: Math.round(rect.top - (document.querySelector('header')?.clientHeight ?? 0)),
				left: Math.round(rect.left),
				width: Math.round(rect.width),
				height: Math.round(rect.height)
			};
		}
		updateOptions = true;
	};

	const debouncedSetWindowWidth = debounce(setWindowWidth, 300);

	$: {
		if (!debouncedInnerWidth && innerWidth) {
			setWindowWidth();
		} else if (innerWidth && innerWidth !== debouncedInnerWidth) {
			debouncedSetWindowWidth();
		}
	}
	$: {
		if (logo) {
			rect = logo.getBoundingClientRect();
		}
	}
	$: roundedRect = rect
		? {
				top: Math.round(rect.top - (document.querySelector('header')?.clientHeight ?? 0)),
				left: Math.round(rect.left),
				width: Math.round(rect.width),
				height: Math.round(rect.height)
			}
		: undefined;
	let options: Background | undefined = undefined;
	$: {
		if (roundedRect && updateOptions) {
			updateOptions = false;
			options = {
				xMax: debouncedInnerWidth,
				yMax: innerHeight * 2,
				maxWidth: getMaxWidth(debouncedInnerWidth),
				blank: {
					circle: true,
					padding: 0,
					...roundedRect
				}
			};
		}
	}
	$: stringified = options ? SuperJSON.stringify(options) : undefined;
	$: iconsBgPath = stringified
		? `https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options=${stringified}`
		: undefined;
</script>

<svelte:window bind:innerWidth bind:innerHeight />
<div class="absolute z-0 flex h-full w-full justify-center">
	{#if iconsBgPath}
		<div class="absolute z-0 h-full w-full" style="background-image: url('{iconsBgPath}')" />
	{/if}
	<div class="absolute z-10 pt-12">
		<img
			class="logo w-60 object-contain"
			src="/images/bdb_logo_color_no_txt.png"
			alt="Brown Dog Biscuits Logo"
			bind:this={logo}
		/>
	</div>
</div>

<div class="relative z-20">
	Image Path:
	<pre>{iconsBgPath}</pre>
</div>
<!-- <div class="relative z-10">
	<p>
		Inner Width: {innerWidth}
	</p>
	<p>
		Inner Height: {innerHeight}
	</p>
	<p>
		Outer Width: {outerWidth}
	</p>
	<p>
		Outer Height: {outerHeight}
	</p>
	<div>
		Rect:
		<pre>{JSON.stringify(rect, null, 2)}</pre>
	</div>
	<div>
		Options:
		<pre>{JSON.stringify(options, null, 2)}</pre>
	</div>
	<div>
		Stringified:
		<pre>{stringified}</pre>
	</div>
</div> -->
