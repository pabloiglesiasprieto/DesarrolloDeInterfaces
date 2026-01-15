import Pokemon from "../../entities/Pokemon";

export default interface IUseCaseGetPokemons {
  getPokemons(): Promise<Pokemon[]>;
}
