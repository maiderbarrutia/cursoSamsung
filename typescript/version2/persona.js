"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.sexSelect = void 0;
var sexSelect;
(function (sexSelect) {
    sexSelect["femenino"] = "Femenino";
    sexSelect["masculino"] = "Masculino";
})(sexSelect = exports.sexSelect || (exports.sexSelect = {}));
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleanios, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanios = cumpleanios;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    get personData() {
        return `
    Nombre: ${this.nombre}
    Apellidos: ${this.apellidos}
    Edad: ${this.edad}
    Dni: ${this.dni}
    Cumpleaños: ${this.cumpleanios}
    Color favorito: ${this.colorFavorito}
    Sexo: ${this.sexo}
    Notas: ${this.notas}
    `;
    }
    set personName(nombre) {
        this.nombre = nombre;
    }
    set personSurname(apellidos) {
        this.apellidos = apellidos;
    }
    set personAge(edad) {
        this.edad = edad;
    }
    set personDni(dni) {
        this.dni = dni;
    }
    set personBirthday(cumpleanios) {
        this.cumpleanios = cumpleanios;
    }
    set personColor(colorFavorito) {
        this.colorFavorito = colorFavorito;
    }
    set personSex(sexo) {
        this.sexo = sexo;
    }
    get getPersonName() {
        return this.nombre;
    }
    get getPersonSurname() {
        return this.apellidos;
    }
    get getPersonAge() {
        return this.edad;
    }
    get getPersonDni() {
        return this.dni;
    }
    get getPersonBirthday() {
        return this.cumpleanios;
    }
    get getPersonColor() {
        return this.colorFavorito;
    }
    get getPersonSex() {
        return this.sexo;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map