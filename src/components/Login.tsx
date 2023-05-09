import { component$} from "@builder.io/qwik";
import Form from "./form/FormCustom";
import useLoginHook from "~/hooks/useLogin";


export default component$(()=>{
  const { useLogin,handleChangeInput, handleSubmitValue } = useLoginHook()
 
  return(
    <>
    {
        !useLogin.isCorrectEmail
        ? <Form
          title="Login"
          label="Ingrese su email"
          onChange={handleChangeInput}
          onSubmit={handleSubmitValue}
        />:
        <Form
          title="Login"
          label="Ingrese su contraseña"
          onChange={handleChangeInput}
          onSubmit={handleSubmitValue}
          type='password'
          />
    }
    </>
  )
})