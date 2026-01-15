import { Container } from "inversify";
import "reflect-metadata";
import { ListaPokemonVM } from "../app/viewmodels/ListaPokemonVM";
import { RepositoryPokemonsAPI } from "../data/repositories/RepositoryPokemonsAPI";
import IRepositoryPokemonsAPI from "../domain/interfaces/repository/IRepositoryPokemonsAPI";
import IUseCaseGetPokemons from "../domain/interfaces/usecase/IUseCaseGetPokemons";
import UseCaseGetPokemons from "../domain/usecase/UseCaseGetPokemons";
import { TYPES } from "./types";

const container = new Container();

// Repository
container
  .bind<IRepositoryPokemonsAPI>(TYPES.IRepositoryPokemonsAPI)
  .to(RepositoryPokemonsAPI);

// Use case
container
  .bind<IUseCaseGetPokemons>(TYPES.IUseCaseGetPokemons)
  .to(UseCaseGetPokemons);

// ViewModel
container.bind<ListaPokemonVM>(TYPES.ListaPokemonVM).to(ListaPokemonVM);

export { container };
