<!-- src/components/daisy/Card.svelte -->
<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	import { getModifiersClasses } from './utils';
	type cardElProps = HTMLDivElement;
	export const config = {
		base: 'card',
		variants: {
			theme: {
				none: '',
				neutral: 'bg-neutral text-neutral-content',
				primary: 'bg-primary text-primary-content',
				secondary: 'bg-secondary text-secondary-content',
				accent: 'bg-accent text-accent-content',
				info: 'bg-info text-info-content',
				success: 'bg-success text-success-content',
				warning: 'bg-warning text-warning-content',
				error: 'bg-error text-error-content'
			},
			padding: {
				default: '',
				normal: 'card-normal',
				compact: 'card-compact'
			},
			image: {
				normal: '',
				side: 'card-side',
				full: 'image-full'
			}
		},
		modifiers: {
			border: 'card-bordered',
			glass: 'glass'
		}
	};

	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		modifiers?: Record<string, boolean>;
	} & cardElProps;
	export type Image = {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	};
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	export let modifiers: Props['modifiers'] = undefined;
	let cls = '';
	export { cls as class };
	export let image: Image | undefined = undefined;
	export let title = '';
	export let description = '';

	$: elementClass = cx([cls, cvaFn(variant), getModifiersClasses(config.modifiers, modifiers)]);
</script>

<div {...$$restProps} class={elementClass}>
	<slot name="start" />
	<slot name="image" />
	{#if image}
		<figure>
			<img width={image.width} height={image.height} src={image.src} alt={image.alt} />
		</figure>
	{/if}
	<div class="card-body">
		<slot name="body-start" />
		<slot name="title" />
		<h2 class="card-title">{title}</h2>
		<slot />
		<p>{description}</p>
		<slot name="description" />
		{#if $$slots.actions}
			<div class="card-actions justify-end">
				<slot name="actions" />
			</div>
		{/if}
		<slot name="body-end" />
	</div>
	<slot name="image-end" />
	<slot name="end" />
</div>
