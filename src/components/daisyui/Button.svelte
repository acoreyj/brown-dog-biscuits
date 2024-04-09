<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	import { getModifiersClasses } from './utils';
	type btnElProps = HTMLButtonElement;
	export const config = {
		base: 'btn',
		variants: {
			theme: {
				neutral: '',
				primary: 'btn-primary',
				secondary: 'btn-secondary',
				accent: 'btn-accent',
				info: 'btn-info',
				success: 'btn-success',
				warning: 'btn-warning',
				error: 'btn-error'
			},
			size: {
				none: '',
				xs: 'btn-xs',
				sm: 'btn-sm',
				md: 'btn-md',
				lg: 'btn-lg'
			},
			shape: {
				default: '',
				wide: 'btn-wide',
				block: 'btn-block',
				circle: 'btn-circle',
				square: 'btn-square'
			}
		},
		modifiers: {
			link: 'btn-link',
			outline: 'btn-outline',
			active: 'btn-active',
			disabled: 'btn-disabled',
			ghost: 'btn-ghost',
			glass: 'glass',
			'no-animation': 'no-animation'
		}
	};
	const cvaFn = cva(config);
	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		modifiers?: Record<string, boolean>;
	} & btnElProps &
		HTMLAnchorElement;
</script>

<script lang="ts">
	export let variant: Props['variant'] = undefined;
	export let modifiers: Props['modifiers'] = undefined;
	export let href: Props['href'] = '';
	let cls = '';
	export { cls as class };

	$: elementClass = cx([cls, cvaFn(variant), getModifiersClasses(config.modifiers, modifiers)]);
</script>

{#if href}
	<a {href} {...$$restProps} class={elementClass}>
		<slot />
	</a>
{:else}
	<button {...$$restProps} class={elementClass}>
		<slot />
	</button>
{/if}
