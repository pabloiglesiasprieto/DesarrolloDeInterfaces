import { injectable } from "inversify";
import Pokemon from "../../domain/entities/Pokemon";

import IRepositoryPokemonsAPI from "@/src/domain/interfaces/repository/IRepositoryPokemonsAPI";
import BaseAPI from "../API/BaseAPI";

type PokemonDTO = Pokemon;

@injectable()
export class RepositoryPokemonsAPI implements IRepositoryPokemonsAPI {
  private api: BaseAPI = new BaseAPI();

  async getPokemons(): Promise<Pokemon[]> {
    const url = this.api.getApiUrl("");

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: this.api.getDefaultHeaders(),
      });

      // 1. Manejo de errores HTTP
      if (!response.ok) {
        // Lanza un error con el estado HTTP (ej: 404, 500)
        throw new Error(
          `Fallo en la API: ${response.status} ${response.statusText}`
        );
      }

      // 2. Extracción de datos
      const data: any = await response.json();
      console.log(data.results);
      // Mapeo (si fuera necesario, aquí sería de DTO a Entity)
      const pokemons: PokemonDTO[] = data.results;

      return pokemons;
    } catch (error) {
      // Este catch maneja errores de red o los errores lanzados arriba
      let errorMessage = "Fallo al conectar con la API de Pokemons.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error("Error al obtener pokemons:", error);
      throw new Error(errorMessage);
    }
  }
}
