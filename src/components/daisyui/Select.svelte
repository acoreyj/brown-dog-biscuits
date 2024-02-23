<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	import { getModifiersClasses } from './utils';
	export const config = {
		base: 'select',
		variants: {
			theme: {
				neutral: '',
				primary: 'select-primary',
				secondary: 'select-secondary',
				accent: 'select-accent',
				info: 'select-info',
				success: 'select-success',
				warning: 'select-warning',
				error: 'select-error'
			},
			size: {
				none: '',
				xs: 'select-xs',
				sm: 'select-sm',
				md: 'select-md',
				lg: 'select-lg'
			}
		},
		modifiers: {
			border: 'select-bordered',
			ghost: 'select-ghost'
		}
	};
	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		modifiers?: Record<string, boolean>;
	} & HTMLSelectElement;
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	export let modifiers: Props['modifiers'] = undefined;
	let cls = '';
	export { cls as class };

	$: elementClass = cx([cls, cvaFn(variant), getModifiersClasses(config.modifiers, modifiers)]);
</script>

<select class={elementClass} {...$$restProps}>
	<slot />
</select>
