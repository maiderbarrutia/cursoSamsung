import { Persona, sexSelect, colorType } from "./persona.js";
import { Direccion } from "./direccion.js";
import { tipoMail, Mail } from "./mail.js";
import { Telefono, tipoTelefono } from "./telefono.js";

//Crear 3 registros por persona y mostrar por consola
const persona1 = new Persona(
  "Isabel",
  "Ríos",
  29,
  "78541278A",
  "21/06/93",
  "rojo",
  sexSelect.femenino,
  [new Direccion("Bravo Murillo", 38, 2, "A", 28027, "Madrid", "Madrid")],
  [new Mail(tipoMail.trabajo, "isabel.rios@samsung.com")],
  [new Telefono(tipoTelefono.movil, 458132578)],
  "Notas.........."
);
var persona2 = new Persona(
  "Ane",
  "Sanz Perez",
  44,
  "94571278H",
  "14/03/78",
  "amarillo",
  sexSelect.femenino,
  [new Direccion("Argibay", 12, 3, "C", 10005, "Cáceres", "Extremadura")],
  [new Mail(tipoMail.personal, "aneSanz@gmail.com")],
  [new Telefono(tipoTelefono.movil, 675941254)],
  "Notas.........."
);
var persona3 = new Persona(
  "Ibon",
  "Martin",
  34,
  "78578128B",
  "23/02/87",
  "azul",
  sexSelect.masculino,
  [new Direccion("Avenida de América", 2, 6, "D", 28002, "Madrid", "Madrid")],
  [new Mail(tipoMail.personal, "ibon.martin@gmail.com")],
  [new Telefono(tipoTelefono.casa, 631784157)],
  "Notas.........."
);
//https://www.youtube.com/watch?v=-5pEkpL_-K8
const personas = [persona1, persona2, persona3];
const lista = document.querySelector("#listContact")!;
for (const persona of personas) {
  //console.log(persona);
  // lista.innerHTML = `<p>${persona.nombre}</p>
  // <p>${persona.direcciones[0].calle}</p>
  // `;
}

personas.map((persona) => {
  //console.log(persona);
  // lista.innerHTML = `<p>${persona.nombre}</p>
  // <p>${persona.direcciones[0].calle}2</p>
  // `;
});
personas.forEach((persona) => {
  // lista.innerHTML = `<p>${persona.nombre}</p>
  // <p>${persona.direcciones[0].calle}</p>
  // `;
});
