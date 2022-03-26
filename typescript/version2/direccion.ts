export class Direccion {
  calle: string;
  numero: number;
  piso: number;
  letra: string;
  codigoPostal: number;
  poblacion: string;
  provincia: string;

  constructor(
    calle: string,
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: number,
    poblacion: string,
    provincia: string
  ) {
    this.calle = calle;
    this.numero = numero;
    this.piso = piso;
    this.letra = letra;
    this.codigoPostal = codigoPostal;
    this.poblacion = poblacion;
    this.provincia = provincia;
  }
  //Para mostrar o recuperarlos en pantalla
  get getDirectionData(): string {
    return `
    Direccion: ${this.calle} ${this.numero} ${this.piso}º${this.letra}. ${this.codigoPostal} ${this.poblacion} (${this.provincia})`;
  }
  get getDirectionStreet(): string {
    return this.calle;
  }
  get getDirectionNumber(): number {
    return this.numero;
  }
  get getDirectionFloor(): number {
    return this.piso;
  }
  get getDirectionLetter(): string {
    return this.letra;
  }
  get getDirectionCode(): number {
    return this.codigoPostal;
  }
  get getDirectionVillage(): string {
    return this.poblacion;
  }
  get getDirectionProvince(): string {
    return this.provincia;
  }

  //Para cambiar los datos
  set directionData(calle: string) {
  `Direccion: ${this.calle = calle}`;
  }
  set directionStreet(calle: string) {
    this.calle = calle;
  }
  set directionNumber(numero: number) {
    this.numero = numero;
  }
  set directionFloor(piso: number) {
    this.piso = piso;
  }
  set directionLetter(letra: string) {
    this.letra = letra;
  }
  set directionCode(codigoPostal: number) {
    this.codigoPostal = codigoPostal;
  }
  set directionVillage(poblacion: string) {
    this.poblacion = poblacion;
  }
  set directionProvince(provincia: string) {
    this.provincia = provincia;
  }
}
