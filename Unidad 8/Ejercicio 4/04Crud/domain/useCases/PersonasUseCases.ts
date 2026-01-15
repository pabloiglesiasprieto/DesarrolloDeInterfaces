import { inject, injectable } from "inversify";
import { TYPES } from "../../core/Types";
import Persona from "../entities/Persona";
import { IPersonasRepository } from "../interfaces/repositories/IPersonasRepository";

@injectable()
export class PersonasUseCases {
    constructor(
        @inject(TYPES.IPersonasRepository) private personaRepository: IPersonasRepository
    ) { }

    public getPersonas(): Promise<Persona[]> {
        return this.personaRepository.getPersonas();
    }

    public getPersona(id: number): Promise<Persona> {
        return this.personaRepository.getPersona(id);
    }

    public addPersona(persona: Persona): Promise<void> {
        return this.personaRepository.addPersona(persona);
    }

    public updatePersona(persona: Persona): Promise<void> {
        return this.personaRepository.updatePersona(persona);
    }

    public deletePersona(id: number): Promise<void> {
        return this.personaRepository.deletePersona(id);
    }
}
