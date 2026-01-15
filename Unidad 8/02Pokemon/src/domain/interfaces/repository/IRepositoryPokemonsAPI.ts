import Pokemon from "../../entities/Pokemon";
export default interface IRepositoryPokemonsAPI {
  getPokemons(): Promise<Pokemon[]>;
}
