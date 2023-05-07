import { component$ } from "@builder.io/qwik";

export default component$(()=>{
  return (
    <button
      class='
      relative disable:opacity-70 disable:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
      bg-rose-500
      p-2
      '>
      Verificar
    </button>
  )
})