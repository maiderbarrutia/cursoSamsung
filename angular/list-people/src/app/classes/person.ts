export enum genderSelect {
  hombre = 'Hombre',
  mujer = 'Mujer',
  otro = 'Otro',
  noEspecificado = 'No especificado',
}
export type colorType = 'azul' | 'rojo' | 'verde' | 'amarillo';

export class Person {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanios: string;
  colorFavorito: colorType;
  genero: genderSelect;

  constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanios: string,
    colorFavorito: colorType,
    genero: genderSelect
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanios = cumpleanios;
    this.colorFavorito = colorFavorito;
    this.genero = genero;
  }
}
