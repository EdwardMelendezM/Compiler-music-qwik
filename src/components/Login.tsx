import { $, component$,useContextProvider,useStore } from "@builder.io/qwik";
import Form from "./form/Form";
import { AuthContext } from "~/context/authContext";

export default component$(()=>{
  
  const useLogin = useStore({
    email:'',
    pass:'',
    isCorrectEmail:false
  })
  useContextProvider(AuthContext, useLogin)

  const handleChangeInput =$((e:any)=>{
    useLogin.email=e.target.value
  })
  
  const handleSubmitValue = $(()=>{
    if (!useLogin.email) return 
    console.log("El valor de email es:", useLogin.email);
  
  })

  return(
    <Form
      title="Login"
      label="Ingrese su email"
      onChange={handleChangeInput}
      onSubmit={handleSubmitValue}
    />
  )
})