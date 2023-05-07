import { component$ } from "@builder.io/qwik";
interface InputProps{
  disabled?:boolean
  onChange?:any
}

export default component$(({ disabled, onChange }: InputProps)=>{
  return (
    <input
      type="text"
      placeholder="user1@gmail.com"
      onChange$={onChange}
      disabled={disabled}
      class='
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
        '
    />
  )
})