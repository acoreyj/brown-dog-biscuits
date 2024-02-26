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

<div class="absolute z-0 flex h-full w-full justify-center">
	<div class="icon-bg absolute z-0 h-full w-full" />
	<div class="absolute z-10 pt-14 md:pt-20">
		<img
			class="logo w-60 object-contain sm:w-80 md:w-96 lg:w-[30rem] xl:w-[36rem] 2xl:w-[40rem]"
			src="/images/bdb_logo_color_no_txt.png"
			alt="Brown Dog Biscuits Logo"
		/>
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
		background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:640,%22yMax%22:1600,%22maxWidth%22:3,%22blank%22:{%22ellipse%22:true,%22padding%22:0,%22top%22:56,%22left%22:200,%22width%22:240,%22height%22:206}}}');
	}

	@media (min-width: 640px) {
		.icon-bg {
			background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:768,%22yMax%22:1800,%22maxWidth%22:4,%22blank%22:{%22ellipse%22:true,%22padding%22:0,%22top%22:56,%22left%22:224,%22width%22:320,%22height%22:275}}}');
		}
	}
	@media (min-width: 768px) {
		.icon-bg {
			background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1024,%22yMax%22:1800,%22maxWidth%22:5,%22blank%22:{%22ellipse%22:true,%22padding%22:0,%22top%22:80,%22left%22:320,%22width%22:384,%22height%22:330}}}');
		}
	}
	@media (min-width: 1024px) {
		.icon-bg {
			background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1280,%22yMax%22:1800,%22maxWidth%22:7,%22blank%22:{%22ellipse%22:true,%22padding%22:0,%22top%22:80,%22left%22:400,%22width%22:480,%22height%22:412}}}');
		}
	}
	@media (min-width: 1280px) {
		.icon-bg {
			background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1536,%22yMax%22:1800,%22maxWidth%22:8,%22blank%22:{%22ellipse%22:true,%22padding%22:0,%22top%22:80,%22left%22:480,%22width%22:576,%22height%22:494}}}');
		}
	}
	@media (min-width: 1536px) {
		.icon-bg {
			background-image: url('https://icon-bg-worker.geniecode.workers.dev/?url=https://icon-background.pages.dev/?options={%22json%22:{%22xMax%22:1670,%22yMax%22:1852,%22maxWidth%22:9,%22blank%22:{%22ellipse%22:true,%22padding%22:0,%22top%22:48,%22left%22:515,%22width%22:640,%22height%22:549}}}');
		}
	}
</style>
