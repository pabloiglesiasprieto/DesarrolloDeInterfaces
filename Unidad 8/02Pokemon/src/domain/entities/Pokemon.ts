export default class Pokemon {
  private _id: number;
  private _nombre: string;
  private _url: string;

  constructor(id: number, nombre: string, url: string) {
    this._id = id;
    this._nombre = nombre;
    this._url = url;
  }

  public get Nombre() {
    return this._nombre;
  }

  public get Url() {
    return this._url;
  }

  public get Id() {
    return this._id;
  }

  public set Id(id: number) {
    this._id = id;
  }
}
