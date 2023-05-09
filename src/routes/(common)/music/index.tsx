import { component$ } from "@builder.io/qwik";
import { routeAction$,Form } from "@builder.io/qwik-city";

export const useLoginAction = routeAction$((data,{cookie,redirect})=>{
  console.log("Aqui se envio toda la data");
  function validate(data:any){
    if (data.username.lenth < 4 || data.password.lenth < 5){
      return false
    }
    else{
      return true
    }
  }
  function getAuthToken(data:any){
    return 'llave '+data
  }
  
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