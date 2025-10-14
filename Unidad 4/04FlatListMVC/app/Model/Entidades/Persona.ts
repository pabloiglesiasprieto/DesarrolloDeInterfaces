export class Persona {
  private id: string;
  private nombre: string;
  private apellido: string;

  constructor(id: string, nombre: string, apellido: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  public getID() {
    return this.id;
  }
  public getNombre() {
    return this.nombre;
  }
  public setNombre(nombre:string) {
    return this.nombre = nombre;
  }
  public getApellido() {
    return this.apellido;
  }
  public setApellido(apellido:string) {
    return this.apellido = apellido;
  }
}
