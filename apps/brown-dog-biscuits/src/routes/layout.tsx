import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { VHElement } from '@qwikbits/utils';
export default component$(() => {
  return (
    <>
      <main>
        <VHElement data-theme="bdb">
          <Header />
          <section class="px-6">
            <Slot />
          </section>
        </VHElement>
      </main>
      <footer></footer>
    </>
  );
});
