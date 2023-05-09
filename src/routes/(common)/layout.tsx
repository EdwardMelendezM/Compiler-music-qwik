import { component$, Slot } from '@builder.io/qwik';
import Navbar from '~/components/navbar/Navbar';


export default component$(() => {
  return (
    <>
      <main class='
        w-[100vw]
        h-[100vh]
        overflow-x-hidden
        flex

      '>
        <Navbar/>
        <Slot />
      </main>
    </>
  );
});