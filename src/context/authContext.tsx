import { createContextId } from "@builder.io/qwik";


  export const AuthContext = createContextId<{pass:string,email:string,isCorrectEmail:boolean}>('auth-context')