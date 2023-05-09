import { component$, $ } from "@builder.io/qwik";
import { routeLoader$, z,  } from "@builder.io/qwik-city";
import { useForm, zodForm$ } from "@modular-forms/qwik";
import { serverGreeter } from "~/server/loginServer";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Please enter your email.')
    .email('The email address is badly formatted.'),
  password: z
    .string()
    .min(1, 'Please enter your password.')
    .min(8, 'You password must have 8 characters or more.'),
});


type LoginSchema = z.infer<typeof loginSchema>;


//Esto se ejecuta antes de que se muestre la pagina
export const useFormLoader = routeLoader$<LoginSchema>(() => ({
  email: '',
  password:''
}));

//Esto se ejecuta antes de que se muestre la pagina
// Se EJECUTA EN EL SERVIDOR
// export const useFormAction = formAction$<emailSchema>((values) => {
//   console.log("Aqui se ejecuta el formAction", values);
// }, zodForm$(emailSchema));

//This is the component
export default component$(() => {
  const [, { Form, Field }] = useForm<LoginSchema>({
    loader: useFormLoader(),
    validate: zodForm$(loginSchema),
  });

  // Se EJECUTA EN EL CLIENTE
  const handleSubmit = $( async(values:any) => { 
    const { email } = values
    console.log("Click here!!", email );
    
    const validoEmail = await serverGreeter(email)
    if (!validoEmail?.ok){
      console.log("Not foun email");
      return 
    }
    console.log("");
    
  });
  return (
    <>
      <Form onSubmit$={handleSubmit}>
        <Field name="email">
          {(field, props) => (
            <input {...props} type="email" value={field.value} />
          )}
        </Field>
        <Field name="password">
          {(field, props) => (
            <input {...props} type="password" value={field.value} />
          )}
        </Field>
        <input type="submit" />

      </Form>
    
    </>
  )
});