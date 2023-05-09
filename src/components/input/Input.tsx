import { $, component$, useContext } from "@builder.io/qwik";
import { AuthContext } from "~/context/authContext";
interface InputProps{
  disabled?:boolean
  onChange?:any
  type?:string
}

export default component$(({ disabled, onChange, type='text' }: InputProps)=>{
  const stateForm = useContext(AuthContext)
  const onClickInput =$(()=>{
    if (!stateForm.isCorrect){
      stateForm.isCorrect=true
    }
  })
  return (
    <input
      type={type}
      placeholder={type === 'text' ? "user1@gmail.com" : "***************"}
      onChange$={onChange}
      onClick$={onClickInput}
      disabled={disabled}
      class={`
        text-lg
        peer
        w-full
        p-4
        font-light
        bg-white
        border-2
        rounded-md
        outline-none
        transition
        disable:opacity-70
        disabled:cursor-not-allowed
        tracking-widest
        ${stateForm.isCorrect ? 'border-gray-400':'border-red-400'}
      `}
        
    />
  )
})