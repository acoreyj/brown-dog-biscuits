<script lang="ts">
	import Background from '$components/Background.svelte';
	import Card from '$components/daisyui/Card.svelte';
</script>

<svelte:head>
	<title>Brown Dog Biscuits</title>
	<meta name="description" content="Fresh made dog treats" />
</svelte:head>

<section class="relative h-full">
	<Background />
	<div class="relative top-[44rem] z-10">
		<Card title="Brown Dog Biscuits" variant={{ theme: 'primary' }}>Fresh made</Card>
	</div>
</section>
