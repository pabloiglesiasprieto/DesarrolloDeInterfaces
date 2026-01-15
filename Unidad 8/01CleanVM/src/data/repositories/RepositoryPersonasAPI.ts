import Persona from "@/src/domain/entities/Persona";
import IRepositoryPersonasAPI from "@/src/domain/interfaces/repositories/IRepositoryPersonasAPI";
import { inject, injectable } from "inversify";
import { TYPES } from "../../core/types";
import BaseApi from "../API/BaseAPI";

// Tipo de dato esperado de la API
type PersonaDto = Persona;

@injectable()
export class RepositoryPersonasAPI implements IRepositoryPersonasAPI {
  private api: BaseApi;

  constructor(@inject(TYPES.BaseAPI) api: BaseApi) {
    this.api = api;
  }
  async getPersonas(): Promise<Persona[]> {
    const url = this.api.getApiUrl("personas"); // Endpoint: /api/personas

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
      const data: PersonaDto[] = await response.json();

      // Mapeo (si fuera necesario, aquí sería de DTO a Entity)
      const personas: Persona[] = data;

      return personas;
    } catch (error) {
      // Este catch maneja errores de red o los errores lanzados arriba
      let errorMessage = "Fallo al conectar con la API de Azure.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error("Error al obtener personas:", error);
      throw new Error(errorMessage);
    }
  }
}
