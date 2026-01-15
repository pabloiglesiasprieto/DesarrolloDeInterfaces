export class Persona {
    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _fechaNacimiento: string;
    private _direccion: string;
    private _telefono: string;
    private _foto: string;
    private _departamentoId: number;

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

    get id(): number {
        return this._id;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get apellido(): string {
        return this._apellido;
    }

    set apellido(value: string) {
        this._apellido = value;
    }

    get fechaNacimiento(): string {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(value: string) {
        this._fechaNacimiento = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get telefono(): string {
        return this._telefono;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    get foto(): string {
        return this._foto;
    }

    set foto(value: string) {
        this._foto = value;
    }

    get departamentoId(): number {
        return this._departamentoId;
    }

    set departamentoId(value: number) {
        this._departamentoId = value;
    }
}
