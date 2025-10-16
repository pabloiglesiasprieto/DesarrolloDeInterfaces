class Persona {
  id: number;
  nombre: string;
  edad: number;

  constructor(id: number, nombre: string, edad: number) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
  }

  public get Nombre(): string {
    return this.nombre;
  }
  public set Nombre(nombre: string) {
    this.nombre = nombre;
  }
  public get Edad(): number {
    return this.edad;
  }
  public set Edad(edad: number) {
    this.edad = edad;
  }
}

export default Persona;
