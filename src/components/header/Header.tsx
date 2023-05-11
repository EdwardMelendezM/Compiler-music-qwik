import { component$ } from "@builder.io/qwik";
import { InputSrc } from "../input/InputSrc";
import Button from "../button/Button";
import { Link } from "@builder.io/qwik-city";
import { Avatar } from "../navbar/Avatar";

export default component$(()=>{
  return(
    <header class={"h-[76px] p-5 pt-4 flex"}>
      <div class={"  w-full flex"}>
        <InputSrc/>
      </div>
      <div class="flex gap-2">
        <div class={"flex gap-2"}>
          <Button label="Princing" />
          <Button label="Go" />
        </div>
        <div class={"flex gap-2"}>
          <Link href={'/'}>
            <Avatar src="" alt="Avatar"/>
          </Link>

        </div>
      </div>
    </header>
  )
})