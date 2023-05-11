import { component$ } from "@builder.io/qwik";
import Input from "../input/Input";
import Button from "../button/Button";
import { Form } from "@builder.io/qwik-city";

interface FormProps{
  title:string
  label:string
  name:string
  disabled?:boolean
  type?:string
  action:any
}

export default component$(({
  title,
  label,
  name,
  type,
  disabled,
  action
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
          <Form action={action}>
            <Input
              disabled={disabled}
              type={type}
              name={name}
              />
            <Button
              label="Enviar"
              disabled={disabled}
              />
          </Form>
      </div>
  )
})