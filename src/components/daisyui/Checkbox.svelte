<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	type InputElProps = HTMLInputElement;
	export const config = {
		base: 'checkbox',
		variants: {
			theme: {
				neutral: '',
				primary: 'checkbox-primary',
				secondary: 'checkbox-secondary',
				accent: 'checkbox-accent',
				info: 'checkbox-info',
				success: 'checkbox-success',
				warning: 'checkbox-warning',
				error: 'checkbox-error'
			},
			size: {
				none: '',
				xs: 'checkbox-xs',
				sm: 'checkbox-sm',
				md: 'checkbox-md',
				lg: 'checkbox-lg'
			}
		}
	};
	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		checked?: boolean;
	} & Omit<InputElProps, 'type'>;
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	export let checked: boolean = false;
	let cls = '';
	export { cls as class };
	$: elementClass = cx([cls, cvaFn(variant)]);
</script>

<input type="checkbox" bind:checked class={elementClass} {...$$restProps} />
