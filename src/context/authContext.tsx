import { createContextId } from "@builder.io/qwik";
export const AuthContext = createContextId<{pass:string,email:string,isCorrect:boolean,isCorrectEmail:boolean,auth:boolean }>('auth-context')