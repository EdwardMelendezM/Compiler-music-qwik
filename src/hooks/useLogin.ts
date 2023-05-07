import { $, useContextProvider, useStore } from "@builder.io/qwik";
import { AuthContext } from "~/context/authContext";

const useLoginHook = () => {
  const useLogin = useStore({
    email: '',
    pass: '',
    isCorrect: true
  })
  useContextProvider(AuthContext, useLogin)

  const handleChangeInput = $((e: any) => {
    useLogin.email = e.target.value
  })

  const handleSubmitValue = $(() => {
    if (useLogin.email.length < 2) {
      useLogin.isCorrect = false
      return
    }
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!useLogin.email.match(validEmail)) {
      useLogin.isCorrect = false
      return
    }
  })
  return { handleChangeInput, handleSubmitValue }
}

 
export default useLoginHook;