import { component$, $ } from "@builder.io/qwik";
import { routeLoader$, useNavigate, z,  } from "@builder.io/qwik-city";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import Button from "~/components/button/Button";
import useLoginHook from "~/hooks/useLogin";
import { serverValidationEmail, serverValidationPass } from "~/server/loginServer";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email.')
    .email('The email address is badly formatted.'),
  password: z
    .string()
    // .min(1, 'Please enter your password.')
    // .min(8, 'You password must have 8 characters or more.')
});


type LoginSchema = z.infer<typeof loginSchema>;


export const useFormLoader = routeLoader$<LoginSchema>(() => ({
  email: '',
  password:''
}));



export default component$(() => {
  const navigate = useNavigate()
  const { useLogin} = useLoginHook()
  const [, { Form, Field }] = useForm<LoginSchema>({
    loader: useFormLoader(),
    validate: zodForm$(loginSchema),
  });

  // Se EJECUTA EN EL CLIENTE
  const handleSubmit = $( async(values:any) => {    
    const { email='', password='' } = values
    if(!useLogin.isCorrectEmail){
      const validoEmail = await serverValidationEmail(email)
      if (!validoEmail?.ok) {
        return
      }
      useLogin.isCorrectEmail=true
    }
    if (password && useLogin.isCorrectEmail && email){
      const validationPassword = await serverValidationPass(password)
      if (!validationPassword) return
      navigate('/music')
    }
    
    console.log(values);
    
    return 
  });

  return (
    <div class='
      flex
      items-center
      justify-center
      w-[100vw]
      h-[100vh]
    '>

    <div class='
        w-[380px]
        h-[230px]
        rounded-lg
      border-l-gray-500
        flex
        flex-col
        justify-between
    '>
      
      <Form onSubmit$={handleSubmit}>
        <div
        class={`${!useLogin.isCorrectEmail ? 'block':'hidden'} flex gap-3 flex-col`}
        >
          <h2 class='text-center text-4xl text-red-500'>Login</h2>
          <div
            class='
                text-center
                text-xl
                text-gray-500
            ' >
              Ingrese su correo electronico
          </div>
          <Field name="email">
            {(field, props) => (
              <input
                {...props}
                type="email"
                value={field.value}
                class='
                    text-lg
                    peer
                    w-full
                    p-4
                    font-light
                    bg-white  
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disable:opacity-70
                    disabled:cursor-not-allowed
                    tracking-widest
                '
              />
            )}
          </Field>
        </div>
        
        <div
        class={`
             
            ${!useLogin.isCorrectEmail ? 'hidden' : 'flex'}
           flex gap-3 flex-col
        `}
        >
            <h2 class='text-center text-4xl text-red-500'>Login</h2>
            <div
              class='
                text-center
                text-xl
                text-gray-500
            ' >
              Ingrese su contraseña
            </div>
          <Field name="password">
            {(field, props) => (
              <input
                {...props}
                type="password"
                value={field.value}
                class='
                    text-lg
                    peer
                    w-full
                    p-4
                    font-light
                    bg-white  
                    border-2
                    rounded-md
                    outline-none
                    transition
                    disable:opacity-70
                    disabled:cursor-not-allowed
                    tracking-widest
                '
              />
            )}
          </Field>
        </div>
        <div class={`mt-3`}>
          <Button
            label="Enviar"
          />    
        </div>
        
      </Form>
    </div>
    </div>
  )
});