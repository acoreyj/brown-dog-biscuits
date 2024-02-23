<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	export const config = {
		base: 'toggle',
		variants: {
			theme: {
				neutral: '',
				primary: 'toggle-primary',
				secondary: 'toggle-secondary',
				accent: 'toggle-accent',
				info: 'toggle-info',
				success: 'toggle-success',
				warning: 'toggle-warning',
				error: 'toggle-error'
			},
			size: {
				none: '',
				xs: 'toggle-xs',
				sm: 'toggle-sm',
				md: 'toggle-md',
				lg: 'toggle-lg'
			}
		}
	};
	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		modifiers?: Record<string, boolean>;
	} & Omit<HTMLInputElement, 'type'>;
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	let cls = '';
	export { cls as class };

	$: elementClass = cx([cls, cvaFn(variant)]);
</script>

<input type="checkbox" class={elementClass} {...$$restProps} />
<slot />
