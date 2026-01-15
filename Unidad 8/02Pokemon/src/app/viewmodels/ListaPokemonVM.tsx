import { TYPES } from "@/src/core/types";
import Pokemon from "@/src/domain/entities/Pokemon";
import IUseCaseGetPokemons from "@/src/domain/interfaces/usecase/IUseCaseGetPokemons";
import { inject } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";

export class ListaPokemonVM {
  private _pokemonList: Pokemon[] = [];
  private _isLoading: boolean = false;
  private _error: string | null = null;
  constructor(
    @inject(TYPES.IUseCaseGetPokemons)
    private useCaseGetPokemons: IUseCaseGetPokemons
  ) {
    makeAutoObservable(this);
  }

  // Getter devuelve el array directamente (ya no es Promise)
  public get pokemonList(): Pokemon[] {
    return this._pokemonList;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public get error(): string | null {
    return this._error;
  }

  async cargarPokemons() {
    try {
      const data = await this.useCaseGetPokemons.getPokemons();

      // Mapear los resultados a instancias de Pokemon
      this._pokemonList = data.map((pokemon: any) => {
        // Extraer el ID de la URL (ej: "https://pokeapi.co/api/v2/pokemon/41/" -> 41)
        const id = parseInt(
          pokemon.url.split("/").filter(Boolean).pop() || "0"
        );

        return new Pokemon(id, pokemon.name, pokemon.url);
      });

      runInAction(() => {
        this._isLoading = false;
      });

      return this._pokemonList;
    } catch (e: any) {
      runInAction(() => {
        this._error = e.message || "Error desconocido";
        this._isLoading = false;
      });
      alert(`Error al cargar personas: ${e.message}`);
    }
  }
}
