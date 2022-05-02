export enum genderSelect {
  hombre = 'Hombre',
  mujer = 'Mujer',
  otro = 'Otro',
  noEspecificado = 'No especificado',
}

export class Person {
  id: number;
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumpleanios: string;
  colorFavorito: string;
  genero: genderSelect;

  constructor(
    id: number,
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleanios: string,
    colorFavorito: string,
    genero: genderSelect
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanios = cumpleanios;
    this.colorFavorito = colorFavorito;
    this.genero = genero;
  }
}
