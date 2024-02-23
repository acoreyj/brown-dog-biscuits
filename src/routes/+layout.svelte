<script>
	import Header from '$components/header/Header.svelte';
	import '../app.pcss';
</script>

<div class="app min-h-screen" data-theme="bdb">
	<Header />
	<main class="relative h-1 min-h-[calc(100vh-108px)]">
		<slot />
	</main>
</div>
