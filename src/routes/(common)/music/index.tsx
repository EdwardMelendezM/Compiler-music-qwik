import { component$ } from "@builder.io/qwik";
import { routeAction$,Form } from "@builder.io/qwik-city";
import { getAuthToken } from "~/helpers/getAuthToken";
import { validate } from "~/helpers/validateLogin";

export const useLoginAction = routeAction$((data,{cookie,redirect})=>{
  console.log("Aqui se envio toda la data");

  if(validate(data)){
    console.log("Esta validado");
    cookie.set('auth',getAuthToken(data.username))
    throw redirect(302,'/')
   }
})

export default component$(()=>{
  const login = useLoginAction()
  return(
    <div >
      <Form action={login}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit" >Login</button>
      </Form>
    </div>
  )
})