import { injectable } from "inversify";
import Persona from "../../domain/entities/Persona";
import { IPersonasRepository } from "../../domain/interfaces/repositories/IPersonasRepository";
import { BaseApi } from "../api/APIConexion";

@injectable()
export class PersonasRepository implements IPersonasRepository {

    private readonly urlApi = new BaseApi("Personas");

    public async getPersonas(): Promise<Persona[]> {
        const response = await fetch(this.urlApi.getAPIConexion);
        const data = await response.json();
        console.log(data);
        return data.map((item: any) => new Persona(
            item.id,
            item.nombre,
            item.apellido,
            item.fechaNac,
            item.direccion,
            item.telefono,
            item.imagen,
            item.idDepartamento
        ));
    }

    public async getPersona(id: number): Promise<Persona> {
        const response = await fetch(this.urlApi.getAPIConexion + "/" + id);
        const item = await response.json();
        return new Persona(
            item.id,
            item.nombre,
            item.apellido,
            item.fechaNac,
            item.direccion,
            item.telefono,
            item.imagen,
            item.idDepartamento
        );
    }

    public async addPersona(persona: Persona): Promise<void> {
        await fetch(this.urlApi.getAPIConexion, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(persona),
        });
    }

    public async updatePersona(persona: Persona): Promise<void> {
        await fetch(this.urlApi.getAPIConexion + "/" + persona.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(persona),
        });
    }

    public async deletePersona(id: number): Promise<void> {
        await fetch(this.urlApi.getAPIConexion + "/" + id, {
            method: "DELETE",
        });
    }
}
