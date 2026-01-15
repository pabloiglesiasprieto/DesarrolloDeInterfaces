export default class Persona {
  private _id: number;
  private _nombre: string;
  private _apellido: string;
  private _direccion: string;
  private _fechaNac: string;
  private _nombreDepartamento: string;
  private _imagen: string;
  private _telefono: string;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    direccion: string = "",
    fechaNac: string = "",
    nombreDepartamento: string = "",
    imagen: string = "",
    telefono: string = ""
  ) {
    this._id = id;
    this._nombre = nombre;
    this._apellido = apellido;
    this._direccion = direccion;
    this._fechaNac = fechaNac;
    this._nombreDepartamento = nombreDepartamento;
    this._imagen = imagen;
    this._telefono = telefono;
  }

  public get Id(): number {
    return this._id;
  }

  public get Nombre(): string {
    return this._nombre;
  }

  public set Nombre(value: string) {
    this._nombre = value;
  }

  public get Apellido(): string {
    return this._apellido;
  }

  public set Apellido(value: string) {
    this._apellido = value;
  }

  public get Direccion(): string {
    return this._direccion;
  }

  public set Direccion(value: string) {
    this._direccion = value;
  }

  public get FechaNac(): string {
    return this._fechaNac;
  }

  public set FechaNac(value: string) {
    this._fechaNac = value;
  }

  public get nombreDepartamento(): string {
    return this._nombreDepartamento;
  }

  public set nombreDepartamento(value: string) {
    this._nombreDepartamento = value;
  }

  public get Imagen(): string {
    return this._imagen;
  }

  public set Imagen(value: string) {
    this._imagen = value;
  }

  public get Telefono(): string {
    return this._telefono;
  }

  public set Telefono(value: string) {
    this._telefono = value;
  }

  // Método helper para obtener la fecha formateada
  public getFechaNacFormateada(): string {
    if (!this._fechaNac) return "";
    const fecha = new Date(this._fechaNac);
    return fecha.toLocaleDateString("es-ES");
  }

  // Método helper para obtener edad
  public getEdad(): number {
    if (!this._fechaNac) return 0;
    const hoy = new Date();
    const fechaNacimiento = new Date(this._fechaNac);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  // Método helper para obtener nombre completo
  public getNombreCompleto(): string {
    return `${this._nombre} ${this._apellido}`;
  }
}
