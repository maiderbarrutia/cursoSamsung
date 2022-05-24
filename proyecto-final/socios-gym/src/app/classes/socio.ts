export enum sexSelect {
  femenino = 'Femenino',
  masculino = 'Masculino',
}

export class Socio {
  nombre: string;
  apellidos: string;
  socio: number;
  dni: string;
  telefono: number;
  sexo: sexSelect;

  constructor(
    nombre: string,
    apellidos: string,
    socio: number,
    dni: string,
    telefono: number,
    sexo: sexSelect
  ) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.socio = socio;
    this.dni = dni;
    this.telefono = telefono;
    this.sexo = sexo;
  }
}
