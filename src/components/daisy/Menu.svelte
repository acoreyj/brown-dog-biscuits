<script context="module" lang="ts">
	import { cva, cx } from 'cva';
	import type { VariantProps } from 'cva';
	import Link, { type Props as LinkProps } from './Link.svelte';
	export const config = {
		base: 'menu',
		variants: {
			size: {
				xs: 'menu-xs',
				sm: 'menu-sm',
				md: 'menu-md',
				lg: 'menu-lg'
			},
			orientation: {
				horizontal: 'menu-horizontal',
				vertical: 'menu-vertical'
			}
		}
	};
	const cvaFn = cva(config);
	export type MenuItemProps = {
		label: string;
	} & LinkProps;

	export type Props = {
		variant?: VariantProps<typeof cvaFn>;
		title?: string;
		hasTitle?: boolean;
		items?: MenuItemProps[];
	} & HTMLUListElement;
</script>

<script lang="ts">
	export let variant: Props['variant'];
	export let title: string;
	export let hasTitle: boolean = false;
	export let items: MenuItemProps[] = [];
	let cls = '';
	export { cls as class };
	$: elementClass = cx([cls, cvaFn(variant)]);
</script>

<ul role="menubar" class={elementClass} {...$$restProps}>
	{#if title || hasTitle}
		<li class="menu-title">
			<slot name="title">{title ? title : ''}</slot>
		</li>
	{/if}
	<slot />
	{#each items as item, i (item.label)}
		<li role="menuitem">
			<Link {...item}>{item.label}</Link>
		</li>
	{/each}
	<slot name="end" />
</ul>
