"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    //Para mostrar o recuperarlos en pantalla
    get getDirectionData() {
        return `
    Direccion: ${this.calle} ${this.numero} ${this.piso}º${this.letra}. ${this.codigoPostal} ${this.poblacion} (${this.provincia})`;
    }
    get getDirectionStreet() {
        return this.calle;
    }
    get getDirectionNumber() {
        return this.numero;
    }
    get getDirectionFloor() {
        return this.piso;
    }
    get getDirectionLetter() {
        return this.letra;
    }
    get getDirectionCode() {
        return this.codigoPostal;
    }
    get getDirectionVillage() {
        return this.poblacion;
    }
    get getDirectionProvince() {
        return this.provincia;
    }
    //Para cambiar los datos
    set directionData(calle) {
        `Direccion: ${this.calle = calle}`;
    }
    set directionStreet(calle) {
        this.calle = calle;
    }
    set directionNumber(numero) {
        this.numero = numero;
    }
    set directionFloor(piso) {
        this.piso = piso;
    }
    set directionLetter(letra) {
        this.letra = letra;
    }
    set directionCode(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }
    set directionVillage(poblacion) {
        this.poblacion = poblacion;
    }
    set directionProvince(provincia) {
        this.provincia = provincia;
    }
}
exports.Direccion = Direccion;
//# sourceMappingURL=direccion.js.map