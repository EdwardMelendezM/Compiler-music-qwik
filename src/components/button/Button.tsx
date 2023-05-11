import {component$ } from "@builder.io/qwik";


interface ButtonProps{
  disabled?:boolean
  onSubmit?:any
  label:string
}

export default component$(({
  label,
  disabled,
  onSubmit
}:ButtonProps)=>{
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick$={onSubmit}
      class='
      relative
      disable:opacity-70 disable:cursor-not-allowed
      rounded-lg
      hover:opacity-80
      transition
      w-full
      bg-rose-500
      p-2
      '>
      {label}
    </button>
  )
})