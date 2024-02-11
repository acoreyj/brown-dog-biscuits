import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="pt-12 mx-6 md:mx-12">
      <div class="logo 2xl:w-[44rem] 2xl:h-[44rem] mx-auto">
        <img
          class="mx-auto 2xl:w-[40rem] 2xl:h-[40rem] rounded-2xl"
          width={689}
          height={591}
          src="/images/bdb_logo_color_no_txt.png"
          alt="Dogs Logo"
        />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Brown Dog Biscuits',
  meta: [
    {
      name: 'description',
      content: 'Fresh baked dog treats!',
    },
  ],
};
