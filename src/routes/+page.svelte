<script lang="ts">
	import Background from '$components/HomeBackground.svelte';
	import Button from '$components/daisyui/Button.svelte';
	import Card from '$components/daisyui/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const features = data.features || [];
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
			{#each features as feature}
				<Card
					image={{
						sizes: '384px',
						src: `https://browndogbiscuits.shop${feature.image}`,
						alt: feature.title || 'Featured item'
					}}
					title={feature.title || 'Featured item'}
					class="w-96 max-w-[90vw]"
					variant={{ theme: 'primary' }}
				>
					{feature.body}
					{#if feature.link}
						<Button slot="actions" class="mt-4" href={feature.link}
							>{feature.linkText || 'See our products'}</Button
						>
					{/if}
				</Card>
			{/each}
		</div>
	</Background>
</section>
