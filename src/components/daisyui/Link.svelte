<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	import { getModifiersClasses } from './utils';
	export const config = {
		base: 'link',
		variants: {
			theme: {
				none: '',
				neutral: 'link-neutral',
				primary: 'link-primary',
				secondary: 'link-secondary',
				accent: 'link-accent',
				info: 'link-info',
				success: 'link-success',
				warning: 'link-warning',
				error: 'link-error'
			}
		},
		modifiers: {
			hover: 'link-hover' // Only show underline on hover
		}
	};
	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		modifiers?: Record<string, boolean>;
	} & Partial<HTMLAnchorElement>;
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	export let modifiers: Props['modifiers'] = undefined;
	export let href: string;
	let cls = '';
	export { cls as class };
	$: elementClass = cx([cls, cvaFn(variant), getModifiersClasses(config.modifiers, modifiers)]);
</script>

<a {href} class={elementClass} {...$$restProps}>
	<slot />
</a>
