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
    //Para cambiar los datos
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
    modifyDirection(direccion) {
        this.direcciones = [direccion];
    }
    modifyTelephone(telefono) {
        this.telefonos = [telefono];
    }
    modifyMail(mail) {
        this.mails = [mail];
    }
    addDirection(nuevaDireccion) {
        this.direcciones.push(nuevaDireccion);
    }
    addPhone(nuevoTelefono) {
        this.telefonos.push(nuevoTelefono);
    }
    addMail(nuevoEmail) {
        this.mails.push(nuevoEmail);
    }
    //Para mostrar o recuperarlos en pantalla
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
    mostrarPersona() {
        console.log(`
    Nombre: ${this.nombre}
    Apellidos: ${this.apellidos}
    Edad: ${this.edad}
    Dni: ${this.dni}
    Cumpleaños: ${this.cumpleanios}
    Color favorito: ${this.colorFavorito}
    Sexo: ${this.sexo}
    Notas: ${this.notas}
    `);
        console.log("Direcciones:");
        this.direcciones.forEach((direccion) => direccion.mostrarDireccion());
        console.log("Mails:");
        this.mails.forEach((mail) => mail.mostrarMail());
        console.log("Teléfonos:");
        this.telefonos.forEach((telefono) => telefono.mostrarTelefono());
    }
}
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map