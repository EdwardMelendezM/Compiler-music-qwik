import { $, component$,useStore } from "@builder.io/qwik";
import Form from "./form/Form";

export default component$(()=>{
  const useLogin = useStore({
    email:'',
    password:''
  })
  const onSubmit = $(() => {
    // if(email.value.length<2) return
    console.log(useLogin.email);
    useLogin.email = ''
  })
  return(
    <Form
      title="Login"
      label="Ingrese su email"
      formValue={useLogin}
      onSubmit={onSubmit}
    />
  )
})