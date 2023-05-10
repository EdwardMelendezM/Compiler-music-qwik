import { component$, $, useTask$,  } from "@builder.io/qwik";
import { routeLoader$, useNavigate, z,  } from "@builder.io/qwik-city";
import { useForm, zodForm$ } from "@modular-forms/qwik";
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
  useTask$(({track})=>{
    track(() => {})

  })
  return (
      <Form onSubmit$={handleSubmit}>
        <div
        class={`${!useLogin.isCorrectEmail ? 'block':'hidden'} `}
        >
          <Field name="email">
            {(field, props) => (
              <input {...props} type="email" value={field.value} />
            )}
          </Field>
        </div>
        
        <div
        class={`${!useLogin.isCorrectEmail ? 'hidden' : 'block'} `}
        >
          <Field name="password">
            {(field, props) => (
              <input {...props} type="password" value={field.value} />
            )}
          </Field>
        </div>

        <input type="submit" value='Validar'/>

      </Form>
  )
});