import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Card } from '@qwikbits/daisyui';
import Image from '../components/genie-image';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <div class="pt-12 mx-6 md:mx-12">
        <img
          class="mx-auto logo 2xl:w-[40rem] 2xl:h-[40rem] rounded-2xl"
          width={689}
          height={591}
          src="/images/bdb_logo_color_no_txt.png"
          alt="Dogs Logo"
        />
      </div>
      <Card
        title="Order Now"
        class="w-96 text-primary-content"
        description="Webb Card Description"
        variant={{
          theme: 'primary',
        }}
        modifiers={{
          border: true,
        }}
      >
        <figure q:slot="image">
          <Image
            src="https://www.qwikbits.dev/images/qwikbits/crab-nebula-webb.jpg"
            alt="webb"
            width={500}
            height={436}
          ></Image>
        </figure>
      </Card>
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
