import {
  component$,
  useStore,
  useStylesScoped$,
  useTask$,
} from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import { Navbar, DaisyLink, Menu, MenuProps } from '@qwikbits/daisyui';
import styles from './header.css?inline';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();
  const items = useStore<{ menuItems: MenuProps['items'] }>(
    { menuItems: [] },
    {
      deep: false,
    }
  );
  const inactiveClass = 'text-primary';
  const activeClass =
    'inline-block bg-gradient-to-r from-accent via-primary to-secondary from-25% via-50% to-75% bg-clip-text !text-transparent';
  useTask$(({ track }) => {
    track(() => loc.url.pathname);
    items.menuItems = [
      {
        useQwikCityLink: true,
        href: '/',
        class: `p-0 m-2 underline-offset-8 decoration-2 text-lg font-bold ${
          loc.url.pathname === '/' ? activeClass : inactiveClass
        }`,
        label: 'Home',
        modifiers: {
          hover: true,
        },
      },
    ];
  });
  return (
    <header class=" w-full">
      <Navbar class="bg-primary navbar">
        <div q:slot="start">
          <Menu variant={{ orientation: 'horizontal' }} items={items.menuItems}>
            <li role="menuitem" q:slot="end">
              <DaisyLink
                href="https://github.com/genie-design/qwikbits"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repo"
              >
                <div class="icon-[lucide--github] text-3xl" />
              </DaisyLink>
            </li>
          </Menu>
        </div>
        <div q:slot="center">
          <div class="flex flex-col items-center">LOGO</div>
        </div>
        <div q:slot="end">
          <Menu variant={{ orientation: 'horizontal' }}>
            <li aria-role="menuitem">END</li>
          </Menu>
        </div>
      </Navbar>
    </header>
  );
});
