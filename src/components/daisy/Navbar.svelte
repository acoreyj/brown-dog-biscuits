<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	export const config = {
		base: 'navbar',
		variants: {
			theme: {
				none: '',
				neutral: 'bg-neutral',
				primary: 'bg-primary',
				secondary: 'bg-secondary',
				accent: 'bg-accent',
				info: 'bg-info',
				success: 'bg-success',
				warning: 'bg-warning',
				error: 'bg-error'
			},
			blur: {
				none: 'backdrop-blur-none',
				sm: 'backdrop-blur-sm',
				md: 'backdrop-blur-md',
				lg: 'backdrop-blur-lg',
				xl: 'backdrop-blur-xl',
				'2xl': 'backdrop-blur-2xl',
				'3xl': 'backdrop-blur-3xl'
			}
		}
	};
	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
	} & HTMLDivElement;
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	let cls = '';
	export { cls as class };

	$: cls = cx([cls, cvaFn(variant)]);
</script>

<div class={cls} {...$$restProps}>
	<slot />
	{#if $$slots.navbarStart}
		<div class="navbar-start">
			<slot name="navbarStart" />
		</div>
	{/if}
	{#if $$slots.navbarCenter}
		<div class="navbar-center">
			<slot name="navbarCenter" />
		</div>
	{/if}
	{#if $$slots.navbarEnd}
		<div class="navbar-end">
			<slot name="navbarEnd" />
		</div>
	{/if}
</div>
