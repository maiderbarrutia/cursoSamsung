import { Persona, sexSelect, colorType } from "./persona.js";
import { Direccion } from "./direccion.js";
import { tipoMail, Mail } from "./mail.js";
import { Telefono, tipoTelefono } from "./telefono.js";

//1- Crear 3 registros por persona y mostrar por consola
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
const persona2 = new Persona(
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
const persona3 = new Persona(
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
const personas = [persona1, persona2, persona3];

personas.forEach((persona) => {
  console.log(`PERSONA CON DATOS ORIGINALES---------------------------------`);
  persona.mostrarPersona();
});

//2- Modificar uno de los registros de persona añadidos realizando busqueda por dni
for (const persona of personas) {
  if (persona.dni === "78578128B") {
    //Modificar el nombre a la persona encontrada por dni
    persona.personName = "Eduardo";

    //Modificar el mail a la persona encontrada por dni
    const cambiarEmail = new Mail(
      tipoMail.personal,
      "eduardo.martin@gmail.com"
    );
    persona.modifyMail(cambiarEmail);

    //Modificar la direccion a la persona encontrada por dni
    const cambiarDireccion = new Direccion(
      "Bravo Murillo",
      38,
      2,
      "A",
      28027,
      "Madrid",
      "Madrid"
    );
    persona.modifyDirection(cambiarDireccion);

    //Modificar el teléfono a la persona encontrada por dni
    const cambiarTelefono = new Telefono(tipoTelefono.casa, 962487561);
    persona.modifyTelephone(cambiarTelefono);

    console.log(
      "PERSONA CON DNI 78578128B: NOMBRE, TELEFONO, MAIL Y DIRECCION CAMBIADO----------------"
    );
    persona.mostrarPersona();

    //Añadir nuevo mail a la persona encontrada por dni
    const nuevoEmail = new Mail(tipoMail.trabajo, "eduardo.martin@trabajo.com");
    persona.addMail(nuevoEmail);

    //Añadir nueva direccion a la persona encontrada por dni
    const nuevaDireccion = new Direccion(
      "Argibay",
      12,
      3,
      "C",
      10005,
      "Cáceres",
      "Extremadura"
    );
    persona.addDirection(nuevaDireccion);

    //Añadir nuevo telefono a la persona encontrada por dni
    const nuevoTelefono = new Telefono(tipoTelefono.movil, 674218612);
    persona.addPhone(nuevoTelefono);

    console.log(
      "PERSONA CON DNI 78578128B: NUEVO TELEFONO, MAIL Y DIRECCION AÑADIDA----------------"
    );
    persona.mostrarPersona();
  }
}

//Mostrar los 3 registros con los cambios realizados
personas.forEach((persona) => {
  console.log(
    `PERSONA CON LOS DATOS CAMBIADOS---------------------------------`
  );
  persona.mostrarPersona();
});
