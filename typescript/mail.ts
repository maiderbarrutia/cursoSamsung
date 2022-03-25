export enum tipoMail {
  trabajo = "Trabajo",
  personal = "Personal",
}
export class Mail {
  tipo: tipoMail;
  direccion: string;

  constructor(tipo: tipoMail, direccion: string) {
    this.tipo = tipo;
    this.direccion = direccion;
  }
  //Para mostrar o recuperarlos en pantalla
  get getMailData(): string {
    return `
    Tipo de email: ${this.tipo} 
    Direccion de email: ${this.direccion}`;
  }
  get getMailType(): string {
    return this.tipo;
  }
  get getMailDirection() {
    return this.direccion;
  }

  //Para cambiar los datos
  set mailType(tipo: tipoMail) {
    this.tipo = tipo;
  }
  set mailDirection(direccion: string) {
    this.direccion = direccion;
  }
}
