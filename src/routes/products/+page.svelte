<script lang="ts">
	import Background from '$components/Background.svelte';
	import Button from '$components/daisyui/Button.svelte';
	import Card from '$components/daisyui/Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const products = data.products || [];
</script>

<section class="relative">
	<Background>
		<div
			class="z-10 grid w-full grid-cols-1 gap-4 bg-transparent px-4 py-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-6 lg:py-6"
		>
			{#each products as product}
				<Card
					image={product?.images?.[0]
						? {
								sizes: '384px',
								src: `https://browndogbiscuits.shop${product.images[0]}`,
								alt: product.name || 'Product'
							}
						: undefined}
					title={product.name || 'Product'}
					class="mx-auto w-96 max-w-[90vw]"
					variant={{ theme: 'primary' }}
				>
					{product.description || ''}
					{#if product.skus?.[0]?.id}
						<Button slot="actions" class="mt-4" href="/products/{product.id}">Learn More</Button>
					{/if}
				</Card>
			{/each}
		</div>
	</Background>
</section>
