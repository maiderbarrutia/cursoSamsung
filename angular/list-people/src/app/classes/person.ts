export enum sexSelect {
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
  // sexo: sexSelect;
  // notas: string;

  constructor(
    nombre: string,
    apellidos: string
    // edad: number,
    // dni: string,
    // cumpleanios: string,
    // colorFavorito: colorType,
    // sexo: sexSelect,
    // notas: string
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    // this.edad = edad;
    // this.dni = dni;
    // this.cumpleanios = cumpleanios;
    // this.colorFavorito = colorFavorito;
    // this.sexo = sexo;
    // this.notas = notas;
  }
}
