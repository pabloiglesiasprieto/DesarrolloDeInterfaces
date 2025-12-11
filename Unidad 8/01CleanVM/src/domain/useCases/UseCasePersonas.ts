import { inject, injectable } from "inversify";
import { TYPES } from "../../core/types";
import Persona from "../entities/Persona";
import IRepositoryPersona from "../interfaces/repositories/IRepositoryPersona";
import IUseCasePersonas from "../interfaces/useCases/IUseCasePersonas";

"../interfaces/repositories/IRepositoryPersona";

@injectable()
export class UseCasePersonasMOCK implements IUseCasePersonas {
  constructor(
    @inject(TYPES.IRepositoryPersonas)
    private repositoryPersonas: IRepositoryPersona
  ) {}

  getPersonas(): Persona[] {
    return this.repositoryPersonas.getListadoCompletoPersonas();
  }
}