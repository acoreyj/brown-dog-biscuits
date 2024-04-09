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
</script>

<script lang="ts">
</script>

<div class="absolute z-0 flex w-full justify-center overflow-visible">
	<div class="icon-bg absolute z-0 min-h-[100vh] w-full overflow-visible">
		<div class="z-10 pt-14 md:pt-20">
			<slot />
		</div>
	</div>
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

<style>
	.icon-bg {
		background-position: top center;
		/* background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:640,%22yMax%22:1600,%22maxWidth%22:3}}'); */
		background-image: url('/images/background/small.jpeg');
	}

	@media (min-width: 640px) {
		.icon-bg {
			/* background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:768,%22yMax%22:1800,%22maxWidth%22:4}}'); */
			background-image: url('/images/background/640.jpeg');
		}
	}
	@media (min-width: 768px) {
		.icon-bg {
			/* background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1024,%22yMax%22:1800,%22maxWidth%22:5}}'); */
			background-image: url('/images/background/768.jpeg');
		}
	}
	@media (min-width: 1024px) {
		.icon-bg {
			/* background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1280,%22yMax%22:1800,%22maxWidth%22:7}}'); */
			background-image: url('/images/background/1024.jpeg');
		}
	}
	@media (min-width: 1280px) {
		.icon-bg {
			/* background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1536,%22yMax%22:1800,%22maxWidth%22:8}}'); */
			background-image: url('/images/background/1280.jpeg');
		}
	}
	@media (min-width: 1536px) {
		.icon-bg {
			/* background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1670,%22yMax%22:1852,%22maxWidth%22:9}}'); */
			background-image: url('/images/background/1536.jpeg');
		}
	}

	@media (min-width: 2560px) {
		.icon-bg {
			/* background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:3840,%22yMax%22:2160,%22maxWidth%22:9}}'); */
			background-image: url('/images/background/2560.jpeg');
		}
	}
</style>
