import { component$ } from "@builder.io/qwik";
import Form from "~/components/Form/Form";

export default component$(()=>{
  return (
    <div
      class='
        w-min-[100wh]
        h-[100vh]
        flex
        items-center
        justify-center
        ' >
      <Form title="Login" label="Ingrese su email" />
    </div>
  )
})