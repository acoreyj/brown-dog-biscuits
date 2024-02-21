import { component$} from '@builder.io/qwik';
import {
  routeLoader$,
  type DocumentHead,
  type RequestHandler,
} from '@builder.io/qwik-city';
import { VHElement } from '@qwikbits/utils';
import Background, { type BackgroundProps } from '../components/background';
import superjson from 'superjson';
export default component$(() => {
  const query = useSettings();
  const options = query.value.options;

  return (
    <div>
      <Background
        xMax={options.xMax || 400}
        yMax={options.yMax || 400}
        blank={options.blank}
      />
      <VHElement class="relative z-10 bg-transparent" data-theme="bdb">
        <section></section>
      </VHElement>
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

export const onRequest: RequestHandler = ({ sharedMap, query }) => {
  query.forEach((v, k) => sharedMap.set(k, v));
};

export const useSettings = routeLoader$(({ sharedMap }) => {
  const obj: Record<string, string> = {};
  sharedMap.forEach((v, k) => {
    console.log({ k, v });
    if (v && typeof v === 'string' && v.includes('json')) {
      obj[k] = superjson.parse(v);
    }
  });
  return obj as unknown as { options: BackgroundProps };
});
