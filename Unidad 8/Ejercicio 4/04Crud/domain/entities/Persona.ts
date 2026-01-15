export default class Persona {

    private _id: number
    private _nombre: string;
    private _apellido: string;
    private _fechaNacimiento: string;
    private _direccion: string;
    private _telefono: string;
    private _foto: string;
    private _departamentoId: number

    constructor(
        id: number,
        nombre: string,
        apellido: string,
        fechaNacimiento: string,
        direccion: string,
        telefono: string,
        foto: string,
        departamentoId: number
    ) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNacimiento = fechaNacimiento;
        this._direccion = direccion;
        this._telefono = telefono;
        this._foto = foto;
        this._departamentoId = departamentoId;
    }

    public get id(): number {
        return this._id;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get apellido(): string {
        return this._apellido;
    }

    public set apellido(value: string) {
        this._apellido = value;
    }

    public get fechaNacimiento(): string {
        return this._fechaNacimiento;
    }

    public set fechaNacimiento(value: string) {
        this._fechaNacimiento = value;
    }

    public get direccion(): string {
        return this._direccion;
    }

    public set direccion(value: string) {
        this._direccion = value;
    }

    public get telefono(): string {
        return this._telefono;
    }

    public set telefono(value: string) {
        this._telefono = value;
    }

    public get foto(): string {
        return this._foto;
    }

    public set foto(value: string) {
        this._foto = value;
    }

    public get departamentoId(): number {
        return this._departamentoId;
    }

    public set departamentoId(value: number) {
        this._departamentoId = value;
    }

}