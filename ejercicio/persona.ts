import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
  marca: string;
  modelo: string;
  constructor(a: string, b: string) {
    this.marca = a;
    this.modelo = b;
  }
  mostrarDatos(): void {
    console.log(this.marca, this.modelo);
  }
}
