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
    get getMailData() {
        return `
    Tipo de email: ${this.tipo} 
    Direccion de email: ${this.direccion}`;
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