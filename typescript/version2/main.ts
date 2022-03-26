import { Persona, sexSelect, colorType } from "./persona.js";
import { Direccion } from "./direccion.js";
import { tipoMail, Mail } from "./mail.js";
import { Telefono, tipoTelefono } from "./telefono.js";

//Crear 3 registros por persona y mostrar por consola
const persona1: Persona = new Persona(
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
const persona2: Persona = new Persona(
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
const persona3: Persona = new Persona(
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

console.log(persona1);
console.log(persona2);
console.log(persona3);

//Modificar uno de los registros de persona añadidos realizando busqueda por dni
const personas = [persona1, persona2, persona3];
for (const persona of personas) {
  if (persona.dni === "78578128B") {
    //Modificar uno de los registros de persona añadidos de la persona encontrada por dni
    persona.personName = "Eduardo";
    console.log(persona);

    //Modificar la direccion, mail y telefono a la persona encontrada por dni
    persona.mails[0].mailType = tipoMail.trabajo;
    persona.mails[0].mailDirection = "eduardo.martin@trabajo.com";
    persona.telefonos[0].phoneType = tipoTelefono.movil;
    persona.telefonos[0].phoneNumber = 674218612;
    persona.direcciones[0].directionStreet = "Argibay";
    persona.direcciones[0].directionNumber = 12;
    persona.direcciones[0].directionFloor = 3;
    persona.direcciones[0].directionLetter = "C";
    persona.direcciones[0].directionCode = 10005;
    persona.direcciones[0].directionVillage = "Cáceres";
    persona.direcciones[0].directionProvince = "Extremadura";

    //Añadir nueva direccion, mail y telefono a la persona encontrada por dni
    const nuevoEmail = new Mail(tipoMail.personal, "eduardo.martin@gmail.com");
    persona.mails.push(nuevoEmail);

    const nuevaDireccion = new Direccion(
      "Bravo Murillo",
      38,
      2,
      "A",
      28027,
      "Madrid",
      "Madrid"
    );
    persona.direcciones.push(nuevaDireccion);

    const nuevoTelefono = new Telefono(tipoTelefono.casa, 962487561);
    persona.telefonos.push(nuevoTelefono);
  }
}

//Mostrar los 3 registros con los cambios realizados
console.log(persona1);
console.log(persona2);
console.log(persona3);
