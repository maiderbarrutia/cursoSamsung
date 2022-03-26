"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_js_1 = require("./persona.js");
const direccion_js_1 = require("./direccion.js");
const mail_js_1 = require("./mail.js");
const telefono_js_1 = require("./telefono.js");
//Crear 3 registros por persona y mostrar por consola
const persona1 = new persona_js_1.Persona("Isabel", "Ríos", 29, "78541278A", "21/06/93", "rojo", persona_js_1.sexSelect.femenino, [new direccion_js_1.Direccion("Bravo Murillo", 38, 2, "A", 28027, "Madrid", "Madrid")], [new mail_js_1.Mail(mail_js_1.tipoMail.trabajo, "isabel.rios@samsung.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.movil, 458132578)], "Notas..........");
const persona2 = new persona_js_1.Persona("Ane", "Sanz Perez", 44, "94571278H", "14/03/78", "amarillo", persona_js_1.sexSelect.femenino, [new direccion_js_1.Direccion("Argibay", 12, 3, "C", 10005, "Cáceres", "Extremadura")], [new mail_js_1.Mail(mail_js_1.tipoMail.personal, "aneSanz@gmail.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.movil, 675941254)], "Notas..........");
const persona3 = new persona_js_1.Persona("Ibon", "Martin", 34, "78578128B", "23/02/87", "azul", persona_js_1.sexSelect.masculino, [new direccion_js_1.Direccion("Avenida de América", 2, 6, "D", 28002, "Madrid", "Madrid")], [new mail_js_1.Mail(mail_js_1.tipoMail.personal, "ibon.martin@gmail.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.casa, 631784157)], "Notas..........");
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
        persona.mails[0].mailType = mail_js_1.tipoMail.trabajo;
        persona.mails[0].mailDirection = "eduardo.martin@trabajo.com";
        persona.telefonos[0].phoneType = telefono_js_1.tipoTelefono.movil;
        persona.telefonos[0].phoneNumber = 674218612;
        persona.direcciones[0].directionStreet = "Argibay";
        persona.direcciones[0].directionNumber = 12;
        persona.direcciones[0].directionFloor = 3;
        persona.direcciones[0].directionLetter = "C";
        persona.direcciones[0].directionCode = 10005;
        persona.direcciones[0].directionVillage = "Cáceres";
        persona.direcciones[0].directionProvince = "Extremadura";
        //Añadir nueva direccion, mail y telefono a la persona encontrada por dni
        const nuevoEmail = new mail_js_1.Mail(mail_js_1.tipoMail.personal, "eduardo.martin@gmail.com");
        persona.mails.push(nuevoEmail);
        const nuevaDireccion = new direccion_js_1.Direccion("Bravo Murillo", 38, 2, "A", 28027, "Madrid", "Madrid");
        persona.direcciones.push(nuevaDireccion);
        const nuevoTelefono = new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.casa, 962487561);
        persona.telefonos.push(nuevoTelefono);
    }
}
//Mostrar los 3 registros con los cambios realizados
console.log(persona1);
console.log(persona2);
console.log(persona3);
//# sourceMappingURL=main.js.map