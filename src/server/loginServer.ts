import { server$ } from "@builder.io/qwik-city";

export const serverValidationEmail = server$((username: string,) => {
  console.log("Ejecutandose en el servidor");
  if (username==='192666@unsaac.edu.pe') return {ok:true, email:'Validate'};
});

export const serverValidationPass = server$((username: string,) => {
  console.log("Ejecutandose en el servidor");
  if (username !== '') return { ok: true, pass: 'Validate' };
});