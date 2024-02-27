<script lang="ts">
	import Background from '$components/Background.svelte';
	import Card from '$components/daisyui/Card.svelte';
</script>

<svelte:head>
	<title>Brown Dog Biscuits</title>
	<meta name="description" content="Fresh made dog treats" />
</svelte:head>

<section class="relative">
	<Background>
		<div
			class="z-10 flex w-full justify-center gap-4 bg-transparent px-4 py-4 lg:gap-6 lg:px-6 lg:py-6"
		>
			<Card title="Brown Dog Biscuits" class="w-36 md:w-96" variant={{ theme: 'primary' }}
				>Fresh made</Card
			>
		</div>
	</Background>
</section>
