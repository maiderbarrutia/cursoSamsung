"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = exports.tipoMail = void 0;
var tipoMail;
(function (tipoMail) {
    tipoMail["trabajo"] = "Trabajo";
    tipoMail["personal"] = "Personal";
})(tipoMail = exports.tipoMail || (exports.tipoMail = {}));
class Mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    //Para mostrar o recuperarlos en pantalla
    mostrarMail() {
        console.log(`
    ${this.tipo}(tipo de email), ${this.direccion}(dirección de email)
    `);
    }
    get getMailType() {
        return this.tipo;
    }
    get getMailDirection() {
        return this.direccion;
    }
    //Para cambiar los datos
    set mailType(tipo) {
        this.tipo = tipo;
    }
    set mailDirection(direccion) {
        this.direccion = direccion;
    }
}
exports.Mail = Mail;
//# sourceMappingURL=mail.js.map