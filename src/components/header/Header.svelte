<script lang="ts">
	import { Navbar, Menu, type MenuProps } from '../daisyui';
	import TwoToneHeart from '$components/icons/twoToneHeartAnimated.svelte';
	import { page } from '$app/stores';

	let menuItems: MenuProps['items'];

	const inactiveClass = '';
	const activeClass = 'underline';

	$: menuItems = [
		{
			href: '/',
			label: 'Home',
			class: `px-4 py-1 m-0 text-lg font-bold ${
				$page.url.pathname === '/' ? activeClass : inactiveClass
			}`,
			modifiers: {
				hover: true
			}
		},
		{
			href: '/products',
			label: 'Products',
			class: `px-4 py-1 m-0 text-lg font-bold ${
				$page.url.pathname === '/products' ? activeClass : inactiveClass
			}`,
			modifiers: {
				hover: true
			}
		}
	];
</script>

<header class="flex w-full flex-col">
	<Navbar
		class="min-h[3rem] navbar border-b border-info bg-secondary px-2 text-secondary-content md:px-16 lg:px-8"
	>
		<div class="navbar-start"></div>
		<div class="navbar-center flex items-center gap-2 lg:gap-6">
			<span class="text-xl text-error lg:text-4xl">
				<TwoToneHeart />
			</span>
			<span class="translate-y-1 font-sheila_crayon text-xl lg:text-4xl">BROWN DOG BISCUITS</span>
			<span class="text-xl text-error lg:text-4xl">
				<TwoToneHeart />
			</span>
		</div>

		<div class="navbar-end flex items-center">
			<span class="icon-[mingcute--dog-line] text-3xl" />
		</div>
	</Navbar>
	<Navbar class="navbar min-h-[2rem] bg-accent px-8 text-accent-content md:px-16">
		<Menu variant={{ orientation: 'horizontal' }} class="p-0" items={menuItems} />
	</Navbar>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 10;
	}
</style>
