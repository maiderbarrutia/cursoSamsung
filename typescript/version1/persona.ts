import { Direccion } from "./direccion.js";
import { tipoMail, Mail } from "./mail.js";
import { Telefono, tipoTelefono } from "./telefono.js";

export enum sexSelect {
  femenino = "Femenino",
  masculino = "Masculino",
}
export type colorType = "azul" | "rojo" | "verde" | "amarillo";

export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanios: string;
  colorFavorito: colorType;
  sexo: sexSelect;
  direcciones: Direccion[];
  mails: Mail[];
  telefonos: Telefono[];
  notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanios: string,
    colorFavorito: colorType,
    sexo: sexSelect,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
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
  set personName(nombre: string) {
    this.nombre = nombre;
  }
  set personSurname(apellidos: string) {
    this.apellidos = apellidos;
  }
  set personAge(edad: number) {
    this.edad = edad;
  }
  set personDni(dni: string) {
    this.dni = dni;
  }
  set personBirthday(cumpleanios: string) {
    this.cumpleanios = cumpleanios;
  }
  set personColor(colorFavorito: colorType) {
    this.colorFavorito = colorFavorito;
  }
  set personSex(sexo: sexSelect) {
    this.sexo = sexo;
  }
  modifyDirection(direccion: Direccion) {
    this.direcciones = [direccion];
  }
  modifyTelephone(telefono: Telefono) {
    this.telefonos = [telefono];
  }
  modifyMail(mail: Mail) {
    this.mails = [mail];
  }
  addDirection(nuevaDireccion: Direccion) {
    this.direcciones.push(nuevaDireccion);
  }
  addPhone(nuevoTelefono: Telefono) {
    this.telefonos.push(nuevoTelefono);
  }
  addMail(nuevoEmail: Mail) {
    this.mails.push(nuevoEmail);
  }

  //Para mostrar o recuperarlos en pantalla
  get getPersonName(): string {
    return this.nombre;
  }
  get getPersonSurname(): string {
    return this.apellidos;
  }
  get getPersonAge(): number {
    return this.edad;
  }
  get getPersonDni(): string {
    return this.dni;
  }
  get getPersonBirthday(): string {
    return this.cumpleanios;
  }
  get getPersonColor(): string {
    return this.colorFavorito;
  }
  get getPersonSex(): string {
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
