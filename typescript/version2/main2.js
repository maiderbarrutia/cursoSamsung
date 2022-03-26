"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_js_1 = require("./persona.js");
const direccion_js_1 = require("./direccion.js");
const mail_js_1 = require("./mail.js");
const telefono_js_1 = require("./telefono.js");
//Crear 3 registros por persona y mostrar por consola
const persona1 = new persona_js_1.Persona("Isabel", "Ríos", 29, "78541278A", "21/06/93", "rojo", persona_js_1.sexSelect.femenino, [new direccion_js_1.Direccion("Bravo Murillo", 38, 2, "A", 28027, "Madrid", "Madrid")], [new mail_js_1.Mail(mail_js_1.tipoMail.trabajo, "isabel.rios@samsung.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.movil, 458132578)], "Notas..........");
var persona2 = new persona_js_1.Persona("Ane", "Sanz Perez", 44, "94571278H", "14/03/78", "amarillo", persona_js_1.sexSelect.femenino, [new direccion_js_1.Direccion("Argibay", 12, 3, "C", 10005, "Cáceres", "Extremadura")], [new mail_js_1.Mail(mail_js_1.tipoMail.personal, "aneSanz@gmail.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.movil, 675941254)], "Notas..........");
var persona3 = new persona_js_1.Persona("Ibon", "Martin", 34, "78578128B", "23/02/87", "azul", persona_js_1.sexSelect.masculino, [new direccion_js_1.Direccion("Avenida de América", 2, 6, "D", 28002, "Madrid", "Madrid")], [new mail_js_1.Mail(mail_js_1.tipoMail.personal, "ibon.martin@gmail.com")], [new telefono_js_1.Telefono(telefono_js_1.tipoTelefono.casa, 631784157)], "Notas..........");
//https://www.youtube.com/watch?v=-5pEkpL_-K8
const personas = [persona1, persona2, persona3];
const lista = document.querySelector("#listContact");
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
//# sourceMappingURL=main2.js.map