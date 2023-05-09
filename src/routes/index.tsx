import { component$ } from "@builder.io/qwik";
import Login from "~/components/Login";
export default component$(()=>{
  
  return (
    <div
      class='
        w-min-[100wh]
        h-[100vh]
        flex
        items-center
        justify-center
        ' 
    >
      <Login />
    </div>
  )
})