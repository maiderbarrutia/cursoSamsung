export enum tipoTelefono {
  casa = "Casa",
  movil = "Móvil",
}

export class Telefono {
  tipo: tipoTelefono;
  numero: number;

  constructor(tipo: tipoTelefono, numero: number) {
    this.tipo = tipo;
    this.numero = numero;
  }

  //Para mostrar o recuperarlos en pantalla
  get getPhoneData(): string {
    return `
    Tipo de teléfono: ${this.tipo} 
    Numero de teléfono: ${this.numero}`;
  }
  get getPhoneType(): string {
    return this.tipo;
  }
  get getPhoneNumber(): number {
    return this.numero;
  }

  //Para cambiar los datos
  set phoneType(tipo: tipoTelefono) {
    this.tipo = tipo;
  }
  set phoneNumber(numero: number) {
    this.numero = numero;
  }
}
