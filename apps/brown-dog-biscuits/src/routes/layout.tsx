import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { VHElement } from '@qwikbits/utils';
import Background from '../components/background';
export default component$(() => {
  const colors = [
    ['bg-primary', 'text-primary-content'],
    ['bg-secondary', 'text-secondary-content'],
    ['bg-accent', 'text-accent-content'],
    ['bg-neutral', 'text-neutral-content'],
    ['bg-base-100', 'text-base-content'],
    ['bg-base-200', 'text-base-content'],
    ['bg-base-300', 'text-base-content'],
    ['bg-info', 'text-info-content'],
    ['bg-success', 'text-success-content'],
    ['bg-warning', 'text-warning-content'],
    ['bg-error', 'text-error-content'],
  ];
  return (
    <>
      <main>
        <Background />
        <VHElement class="relative z-10 bg-transparent" data-theme="bdb">
          <Header />
          <section class="px-6">
            <Slot />
          </section>
          <div class="flex mt-16 bg-black p-5 flex-wrap">
            {colors.map((color) => {
              return (
                <div
                  key={color[0]}
                  class={`border border-yellow-500 flex justify-center items-center h-10 w-20 ${color[0]} ${color[1]} `}
                >
                  <span>{color[0].replace('bg-', '')}</span>
                </div>
              );
            })}
          </div>
        </VHElement>
      </main>
    </>
  );
});
