<script lang="ts">
	import Background from '$components/Background.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Background {...data.options} unzippedIconConfigs={data.unzippedIconConfigs} />
</section>
