import { component$ } from "@builder.io/qwik";
import Header from "~/components/header/Header";

export default component$(()=>{
  return(
    <div class={"w-full"}>
      <Header/>
      This is the music
    </div>
  )
})