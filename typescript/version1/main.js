"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_js_1 = require("./persona.js");
const direccion_js_1 = require("./direccion.js");
const mail_js_1 = require("./mail.js");
const telefono_js_1 = require("./telefono.js");
//1- Crear 3 registros por persona y mostrar por consola
const persona1 = new persona_js_1.Persona("Isabel", "Ríos", 29, "78541278A", "21/06/93", "rojo", persona_js_1.sexSelect.femenino, [new direccion_js_1.Direccion("Bravo Murillo", 38, 2, "A", 28027, "Madrid", "Madrid")], [new mail_js_1.Mail(mail_js_1.tipoMail.trabajo, "isabel.rios@samsung.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.movil, 458132578)], "Notas..........");
const persona2 = new persona_js_1.Persona("Ane", "Sanz Perez", 44, "94571278H", "14/03/78", "amarillo", persona_js_1.sexSelect.femenino, [new direccion_js_1.Direccion("Argibay", 12, 3, "C", 10005, "Cáceres", "Extremadura")], [new mail_js_1.Mail(mail_js_1.tipoMail.personal, "aneSanz@gmail.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.movil, 675941254)], "Notas..........");
const persona3 = new persona_js_1.Persona("Ibon", "Martin", 34, "78578128B", "23/02/87", "azul", persona_js_1.sexSelect.masculino, [new direccion_js_1.Direccion("Avenida de América", 2, 6, "D", 28002, "Madrid", "Madrid")], [new mail_js_1.Mail(mail_js_1.tipoMail.personal, "ibon.martin@gmail.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.casa, 631784157)], "Notas..........");
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
        const cambiarEmail = new mail_js_1.Mail(mail_js_1.tipoMail.personal, "eduardo.martin@gmail.com");
        persona.modifyMail(cambiarEmail);
        //Modificar la direccion a la persona encontrada por dni
        const cambiarDireccion = new direccion_js_1.Direccion("Bravo Murillo", 38, 2, "A", 28027, "Madrid", "Madrid");
        persona.modifyDirection(cambiarDireccion);
        //Modificar el teléfono a la persona encontrada por dni
        const cambiarTelefono = new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.casa, 962487561);
        persona.modifyTelephone(cambiarTelefono);
        console.log("PERSONA CON DNI 78578128B: NOMBRE, TELEFONO, MAIL Y DIRECCION CAMBIADO----------------");
        persona.mostrarPersona();
        //Añadir nuevo mail a la persona encontrada por dni
        const nuevoEmail = new mail_js_1.Mail(mail_js_1.tipoMail.trabajo, "eduardo.martin@trabajo.com");
        persona.addMail(nuevoEmail);
        //Añadir nueva direccion a la persona encontrada por dni
        const nuevaDireccion = new direccion_js_1.Direccion("Argibay", 12, 3, "C", 10005, "Cáceres", "Extremadura");
        persona.addDirection(nuevaDireccion);
        //Añadir nuevo telefono a la persona encontrada por dni
        const nuevoTelefono = new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.movil, 674218612);
        persona.addPhone(nuevoTelefono);
        console.log("PERSONA CON DNI 78578128B: NUEVO TELEFONO, MAIL Y DIRECCION AÑADIDA----------------");
        persona.mostrarPersona();
    }
}
//Mostrar los 3 registros con los cambios realizados
personas.forEach((persona) => {
    console.log(`PERSONA CON LOS DATOS CAMBIADOS---------------------------------`);
    persona.mostrarPersona();
});
//# sourceMappingURL=main.js.map