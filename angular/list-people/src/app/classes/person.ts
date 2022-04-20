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
  // edad: number;
  // dni: string;
  // cumpleanios: string;
  // colorFavorito: colorType;
  genero: genderSelect;
  // notas: string;

  constructor(
    nombre: string,
    apellidos: string,
    // edad: number,
    // dni: string,
    // cumpleanios: string,
    // colorFavorito: colorType,
    genero: genderSelect
    // notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    // this.edad = edad;
    // this.dni = dni;
    // this.cumpleanios = cumpleanios;
    // this.colorFavorito = colorFavorito;
    this.genero = genero;
    // this.notas = notas;
  }
}
