<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	import { getModifiersClasses } from './utils';
	export const config = {
		base: 'tooltip',
		variants: {
			theme: {
				none: '',
				primary: 'tooltip-primary',
				secondary: 'tooltip-secondary',
				accent: 'tooltip-accent',
				info: 'tooltip-info',
				success: 'tooltip-success',
				warning: 'tooltip-warning',
				error: 'tooltip-error'
			},
			direction: {
				top: 'tooltip-top',
				bottom: 'tooltip-bottom',
				left: 'tooltip-left',
				right: 'tooltip-right'
			}
		},
		modifiers: {
			open: 'tooltip-open'
		}
	};
	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		modifiers?: Record<string, boolean>;
		tip?: string;
	} & HTMLDivElement;
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	export let modifiers: Props['modifiers'] = undefined;
	export let tip: Props['tip'];
	let cls = '';
	export { cls as class };

	$: elementClass = cx([cls, cvaFn(variant), getModifiersClasses(config.modifiers, modifiers)]);
</script>

<div class={elementClass} data-tip={tip} {...$$restProps}>
	<slot />
</div>
