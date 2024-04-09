<script lang="ts">
	export let src = '';
	export let loading: HTMLImageElement['loading'] = 'lazy';
	export let decoding: HTMLImageElement['decoding'] = 'async';
	export let sizes = '';
	export let alt = '';
	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;
</script>

<picture>
	<source
		srcSet={`${src}?f=avif&w=3840 3840w,
			${src}?f=avif&w=1920 1920w,
			${src}?f=avif&w=1280 1280w,
			${src}?f=avif&w=960 960w,
			${src}?f=avif&w=640 640w,
			${src}?f=avif&w=384 384w,
			${src}?f=avif&w=144 144w
			`}
		{sizes}
		type="image/avif"
	/>
	<source
		srcSet={`${src}?f=webp&w=3840 3840w,
					${src}?f=webp&w=1920 1920w,
					${src}?f=webp&w=1280 1280w,
					${src}?f=webp&w=960 960w,
					${src}?f=webp&w=640 640w,
					${src}?f=webp&w=384 384w,
					${src}?f=webp&w=144 144w
					`}
		{sizes}
		type="image/webp"
	/>

	<img
		srcset={`${src}?w=3840 3840w,
		${src}?w=1920 1920w,
		${src}?w=1280 1280w,
		${src}?w=960 960w,
		${src}?w=640 640w,
		${src}?w=384 384w,
		${src}?w=144 144w
	`}
		alt={alt || 'description'}
		{decoding}
		{loading}
		{width}
		{height}
		{sizes}
	/>
</picture>
