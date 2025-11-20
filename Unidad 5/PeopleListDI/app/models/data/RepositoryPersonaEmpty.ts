import { injectable } from "inversify";
import { Persona } from "../entities/PersonaModel";

export interface IRepositoryPersonas {
  getListadoCompletoPersonas(): Persona[];
}

@injectable()
export class RepositoryPersonaEmpty implements IRepositoryPersonas {
  getListadoCompletoPersonas(): Persona[] {
    return [];
  }
}
