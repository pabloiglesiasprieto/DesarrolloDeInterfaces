import { inject, injectable } from "inversify";
import { TYPES } from "../../core/Types";
import { Persona } from "../entities/Persona";
import { IPersonasRepository } from "../interfaces/repositories/IPersonasRepository";
import { IPersonasUseCases } from "../interfaces/useCases/IPersonasUseCases";

@injectable()
export class PersonasUseCases implements IPersonasUseCases {
    private _personasRepository: IPersonasRepository;

    constructor(@inject(TYPES.IPersonasRepository) personasRepository: IPersonasRepository) {
        this._personasRepository = personasRepository;
    }

    async getPersonas(): Promise<Persona[]> {
        const personas = await this._personasRepository.getPersonas();
        const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday

        // Friday (5) or Saturday (6): Return only people > 18 years old
        if (today === 5 || today === 6) {
            return personas.filter(p => this.calculateAge(p.fechaNacimiento) > 18);
        }

        return personas;
    }

    private calculateAge(dateString: string): number {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    async getPersona(id: number): Promise<Persona> {
        return await this._personasRepository.getPersona(id);
    }

    async addPersona(persona: Persona): Promise<void> {
        return await this._personasRepository.addPersona(persona);
    }

    async updatePersona(persona: Persona): Promise<void> {
        return await this._personasRepository.updatePersona(persona);
    }

    async deletePersona(id: number): Promise<void> {
        const today = new Date().getDay();
        // Sunday (0): Deletion not allowed
        if (today === 0) {
            throw new Error("No está permitido eliminar personas los domingos.");
        }
        return await this._personasRepository.deletePersona(id);
    }
}
