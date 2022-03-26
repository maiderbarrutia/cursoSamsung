"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = exports.tipoTelefono = void 0;
var tipoTelefono;
(function (tipoTelefono) {
    tipoTelefono["casa"] = "Casa";
    tipoTelefono["movil"] = "M\u00F3vil";
})(tipoTelefono = exports.tipoTelefono || (exports.tipoTelefono = {}));
class Telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    //Para mostrar o recuperarlos en pantalla
    mostrarTelefono() {
        console.log(`
    ${this.tipo}(tipo de teléfono), ${this.numero}(número de teléfono)
    `);
    }
    get getPhoneType() {
        return this.tipo;
    }
    get getPhoneNumber() {
        return this.numero;
    }
    //Para cambiar los datos
    set phoneType(tipo) {
        this.tipo = tipo;
    }
    set phoneNumber(numero) {
        this.numero = numero;
    }
}
exports.Telefono = Telefono;
//# sourceMappingURL=telefono.js.map