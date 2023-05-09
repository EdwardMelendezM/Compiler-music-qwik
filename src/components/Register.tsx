import { component$} from "@builder.io/qwik";
import Form from "./form/FormCustom";
import useLoginHook from "~/hooks/useLogin";


export default component$(()=>{
  const { handleChangeInput, handleSubmitValue } = useLoginHook()
 
  return(
    <Form
      title="Login"
      label="Ingrese su email"
      onChange={handleChangeInput}
      onSubmit={handleSubmitValue}
    />
  )
})