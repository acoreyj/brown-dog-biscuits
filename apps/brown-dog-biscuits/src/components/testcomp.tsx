import {
  component$,
  useTask$,
  useVisibleTask$,
  useSignal,
} from '@builder.io/qwik';
import { isBrowser } from '@builder.io/qwik/build';

export default component$(() => {
  const ref = useSignal<Element>();

  // useVisibleTask$ will only run in the browser
  useVisibleTask$(() => {
    // No need to check for `isBrowser` before accessing the DOM, because useVisibleTask$ will only run in the browser
    console.log('WHAM', ref.value);
    ref.value?.focus();
    document.title = 'Hello world';
  });

  // useTask might run on the server, so you need to check for `isBrowser` before accessing the DOM
  useTask$(() => {
    if (isBrowser) {
      // This code will only run in the browser only when the component is first rendered there
      ref.value?.focus();
      document.title = 'Hello world';
    }
  });

  return (
    <button
      ref={ref}
      onClick$={() => {
        // All event handlers are only executed in the browser, so it's safe to access the DOM
        ref.value?.focus();
        document.title = 'Hello world';
      }}
    >
      Click me
    </button>
  );
});
