import { server$ } from "@builder.io/qwik-city";

export const serverGreeter = server$((username: string,) => {
  console.log("Ejecutandose en el servidor");
  
  if (username==='192666@unsaac.edu.pe')
  return {ok:true, sign:'Validate'};
});