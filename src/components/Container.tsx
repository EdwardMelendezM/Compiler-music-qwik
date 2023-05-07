import { Slot, component$ } from "@builder.io/qwik";


export default component$(() => {
  return (
    <div class='py-4 px-3'>
      <Slot />
    </div>
  )
})