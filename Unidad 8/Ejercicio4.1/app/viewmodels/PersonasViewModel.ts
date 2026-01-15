import { inject, injectable } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";
import { TYPES } from "../../core/Types";
import { Persona } from "../../domain/entities/Persona";
import { IPersonasUseCases } from "../../domain/interfaces/useCases/IPersonasUseCases";

@injectable()
export class PersonasViewModel {
    private readonly _useCases: IPersonasUseCases;
    public personas: Persona[] = [];
    public personaSeleccionada: Persona | null = null;
    
    // Form State
    public nombre: string = "";
    public apellido: string = "";
    public fechaNacimiento: string = "";
    public direccion: string = "";
    public telefono: string = "";
    public foto: string = "";
    public departamentoId: string = "0";

    constructor(@inject(TYPES.IPersonasUseCases) useCases: IPersonasUseCases) {
        this._useCases = useCases;
        makeAutoObservable(this);
    }

    async getPersonas() {
        try {
            const data = await this._useCases.getPersonas();
            runInAction(() => {
                this.personas = data;
            });
            return data;
        } catch (error) {
            console.error("Error fetching personas:", error);
            return [];
        }
    }

    async getPersona(id: number) {
        return await this._useCases.getPersona(id);
    }

    setPersonaSeleccionada(persona: Persona | null) {
        runInAction(() => {
            this.personaSeleccionada = persona;
            if (persona) {
                this.nombre = persona.nombre;
                this.apellido = persona.apellido;
                this.fechaNacimiento = persona.fechaNacimiento;
                this.direccion = persona.direccion;
                this.telefono = persona.telefono;
                this.foto = persona.foto;
                this.departamentoId = (persona.departamentoId || 0).toString();
            } else {
                this.nombre = "";
                this.apellido = "";
                this.fechaNacimiento = "";
                this.direccion = "";
                this.telefono = "";
                this.foto = "";
                this.departamentoId = "0";
            }
        });
    }

    getPersonaSeleccionada(): Persona | null {
        return this.personaSeleccionada;
    }

    // Form Setters
    setNombre(value: string) { this.nombre = value; }
    setApellido(value: string) { this.apellido = value; }
    setFechaNacimiento(value: string) { this.fechaNacimiento = value; }
    setDireccion(value: string) { this.direccion = value; }
    setTelefono(value: string) { this.telefono = value; }
    setFoto(value: string) { this.foto = value; }
    setDepartamentoId(value: string) { this.departamentoId = value; }

    async savePersona() {
        if (!this.nombre || !this.apellido) {
            throw new Error("El nombre y el apellido son obligatorios.");
        }

        const p = new Persona(
            this.personaSeleccionada ? this.personaSeleccionada.id : 0,
            this.nombre,
            this.apellido,
            this.fechaNacimiento,
            this.direccion,
            this.telefono,
            this.foto,
            parseInt(this.departamentoId) || 0
        );

        if (this.personaSeleccionada) {
            await this.updatePersona(p);
        } else {
            await this.addPersona(p);
        }
    }

    async addPersona(persona: Persona) {
        await this._useCases.addPersona(persona);
        await this.getPersonas();
    }

    async updatePersona(persona: Persona) {
        await this._useCases.updatePersona(persona);
        await this.getPersonas();
    }

    async deletePersona(id: number) {
        try {
           await this._useCases.deletePersona(id);
           await this.getPersonas();
        } catch (error) {
            console.error("Error deleting persona:", error);
            alert(error); // Simple alert for business rule violation
            throw error;
        }
    }
}
