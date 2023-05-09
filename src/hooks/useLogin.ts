import { $, useContextProvider, useStore } from "@builder.io/qwik";
import { AuthContext } from "~/context/authContext";

const useLoginHook = () => {
  const useLogin = useStore({
    email: '',
    pass: '',
    isCorrect: true,
    isCorrectEmail:false,
    auth:false
  })
  useContextProvider(AuthContext, useLogin)

  const handleChangeInput = $((e: any) => {
    if (!useLogin.isCorrectEmail){
      useLogin.email = e.target.value
    }else{
      useLogin.pass = e.target.value
    }
  })

  const handleSubmitValue = $(() => {
    if (!useLogin.isCorrectEmail){
      if (useLogin.email.length < 2) {
        useLogin.isCorrect = false
        return
      }
      const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      if (!useLogin.email.match(validEmail)) {
        useLogin.isCorrect = false
        return
      }
      useLogin.isCorrectEmail = true
    }
    else{
      if (useLogin.pass.length<8){
        useLogin.isCorrect = false
        return
      }
      useLogin.auth=true
      
    }
    
  })
  return { handleChangeInput, handleSubmitValue, useLogin }
}

 
export default useLoginHook;