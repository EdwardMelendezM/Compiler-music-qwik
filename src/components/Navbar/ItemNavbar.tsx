import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
interface ItemNavbarProps{
  text?:string
  url?:string
}

export default component$(({text,url='/music'}:ItemNavbarProps)=>{
  const navigate = useNavigate()
  return (
    <div
      onClick$={() => { navigate(url) }}
      class='
        text-white
        w-full 
        py-4
        text-center
        hover:cursor-pointer
        hover:text-gray-400
        transition-all
        '
    >
      {text}
    </div>
  )
})