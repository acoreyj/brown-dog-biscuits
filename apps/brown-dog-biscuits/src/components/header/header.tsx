import {
  component$,
  useStore,
  useStylesScoped$,
  useTask$,
} from '@builder.io/qwik';
import { Navbar, DaisyLink, Menu, MenuProps } from '@qwikbits/daisyui';
import styles from './header.css?inline';
import { useLocation } from '@builder.io/qwik-city';
import { TwoToneHeart } from '../icons/twoToneHeart';

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();
  const items = useStore<{ menuItems: MenuProps['items'] }>(
    { menuItems: [] },
    {
      deep: false,
    }
  );
  const inactiveClass = '';

  const activeClass = 'underline';
  useTask$(({ track }) => {
    track(() => loc.url.pathname);
    items.menuItems = [
      {
        useQwikCityLink: true,
        href: '/',
        class: `px-1 py-0 m-0 text-lg font-bold ${
          loc.url.pathname === '/' ? activeClass : inactiveClass
        }`,
        label: 'Home',
        modifiers: {
          hover: true,
        },
      },
      {
        useQwikCityLink: true,
        href: '/products',
        class: `px-1 py-0 m-0 text-lg font-bold ${
          loc.url.pathname === '/products' ? activeClass : inactiveClass
        }`,
        label: 'Products',
        modifiers: {
          hover: true,
        },
      },
    ];
  });
  return (
    <header class="flex flex-col w-full">
      <Navbar class="bg-secondary px-8 md:px-16 border-b border-info text-secondary-content navbar min-h[3rem]">
        <div class="navbar-start"></div>
        <div class="flex gap-6 navbar-center items-center">
          <span class="text-4xl text-error">
            <TwoToneHeart />
          </span>
          <span class="font-sheila_crayon text-4xl translate-y-1">
            BROWN DOG BISCUITS
          </span>
          <span class="text-4xl text-error">
            <TwoToneHeart />
          </span>
        </div>

        <div class="navbar-end flex items-center">
          <span class="text-3xl icon-[mingcute--dog-line]" />
        </div>
      </Navbar>
      <Navbar class="bg-accent px-8 md:px-16 text-accent-content navbar min-h-[2rem]">
        <Menu
          variant={{ orientation: 'horizontal' }}
          class="p-0"
          items={items.menuItems}
        />
      </Navbar>
    </header>
  );
});
