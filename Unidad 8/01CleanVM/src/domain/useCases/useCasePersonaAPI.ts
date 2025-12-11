import { inject } from "inversify";
import { TYPES } from "../../core/types";
import Persona from "../entities/Persona";
import IRepositoryPersonasAPI from "../interfaces/repositories/IRepositoryPersonasAPI";
import IUseCasePersonasAPI from "../interfaces/useCases/IUseCasePersonasAPI";

export class UseCasePersonasAPI implements IUseCasePersonasAPI {

    constructor(
        @inject(TYPES.IRepositoryPersonasAPI)
        private repositoryPersonas: IRepositoryPersonasAPI
    ) { }
    async getPersonas(): Promise<Persona[]> {
        return this.repositoryPersonas.getPersonas();
    }

}