import { component$ } from "@builder.io/qwik";
import Input from "../input/Input";
import Button from "../button/Button";

interface FormProps{
  title:string
  label:string
  onSubmit?:any
  onChange?:any
  disabled?:boolean
  type?:string
}

export default component$(({
  title,
  label,
  onSubmit,
  disabled,
  onChange,
  type
}: FormProps)=>{
  return (
      <div class='
        w-[380px]
        h-[230px]
        rounded-lg
      border-l-gray-500
        flex
        flex-col
        justify-between
      '>

          <h2 class='text-center text-4xl text-red-500'>{title}</h2>
          <div class='
          text-center
          text-xl
          text-gray-500
          ' >
            {label}
          </div>
          <Input
            disabled={disabled}
            onChange={onChange}
            type={type}
            />
          <Button
            disabled={disabled}
            onSubmit={onSubmit}
            />
      </div>
  )
})