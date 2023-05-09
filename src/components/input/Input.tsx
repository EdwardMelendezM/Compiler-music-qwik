import {  component$,  } from "@builder.io/qwik";
interface InputProps{
  disabled?:boolean
  type?:string
  name:string
}

export default component$(({ disabled,  type = 'text', name }: InputProps)=>{
  // const stateForm = useContext(AuthContext)
  // const onClickInput =$(()=>{
  //   if (!stateForm.isCorrect){
  //     stateForm.isCorrect=true
  //   }
  // })
  return (
    <input
      name={name}
      type={type}
      placeholder={type === 'text' ? "user1@gmail.com" : "***************"}
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
        
      `}
        
    />
    // <input
    //   type={type}
    //   placeholder={type === 'text' ? "user1@gmail.com" : "***************"}
    //   onChange$={onChange}
    //   disabled={disabled}
    //   class={`
    //     text-lg
    //     peer
    //     w-full
    //     p-4
    //     font-light
    //     bg-white
    //     border-2
    //     rounded-md
    //     outline-none
    //     transition
    //     disable:opacity-70
    //     disabled:cursor-not-allowed
    //     tracking-widest
    //     ${stateForm.isCorrect ? 'border-gray-400':'border-red-400'}
    //   `}
        
    // />
  )
})