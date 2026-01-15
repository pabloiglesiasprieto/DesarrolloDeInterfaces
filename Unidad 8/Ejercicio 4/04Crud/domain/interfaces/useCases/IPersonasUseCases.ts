import Persona from "../../entities/Persona";

export interface IPersonasUseCases {
    getPersonas(): Promise<Persona[]>;
    getPersona(id: number): Promise<Persona>;
    addPersona(persona: Persona): Promise<void>;
    updatePersona(persona: Persona): Promise<void>;
    deletePersona(id: number): Promise<void>;
}
