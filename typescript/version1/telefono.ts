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
  mostrarTelefono() {
    console.log(`
    ${this.tipo}(tipo de teléfono), ${this.numero}(número de teléfono)
    `);
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
