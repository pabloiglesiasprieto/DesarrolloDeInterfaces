import { TYPES } from "@/src/core/types";
import { inject, injectable } from "inversify";
import Pokemon from "../entities/Pokemon";
import IRepositoryPokemonsAPI from "../interfaces/repository/IRepositoryPokemonsAPI";
import IUseCaseGetPokemons from "../interfaces/usecase/IUseCaseGetPokemons";

@injectable()
export default class UseCaseGetPokemons implements IUseCaseGetPokemons {
  constructor(
    @inject(TYPES.IRepositoryPokemonsAPI)
    private repositoryPokemons: IRepositoryPokemonsAPI
  ) {}
  async getPokemons(): Promise<Pokemon[]> {
    return this.repositoryPokemons.getPokemons();
  }
}
