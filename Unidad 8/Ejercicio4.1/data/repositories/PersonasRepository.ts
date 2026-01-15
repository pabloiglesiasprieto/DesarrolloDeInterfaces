import { Persona } from "../../domain/entities/Persona";
import { IPersonasRepository } from "../../domain/interfaces/repositories/IPersonasRepository";
import { APIConexion } from "../api/APIConexion";

export class PersonasRepository implements IPersonasRepository {
    async getPersonas(): Promise<Persona[]> {
        const response = await fetch(`${APIConexion.getAPIConexion}Personas`);
        const data = await response.json();
        return data.map((p: any) => new Persona(
            p.id,
            p.nombre,
            p.apellido,
            p.fechaNacimiento,
            p.direccion,
            p.telefono,
            p.foto,
            p.idDepartamento
        ));
    }

    async getPersona(id: number): Promise<Persona> {
        const response = await fetch(`${APIConexion.getAPIConexion}Personas/${id}`);
        const data = await response.json();
        return new Persona(
            data.id,
            data.nombre,
            data.apellido,
            data.fechaNacimiento,
            data.direccion,
            data.telefono,
            data.foto,
            data.idDepartamento
        );
    }

    async addPersona(persona: Persona): Promise<void> {
        await fetch(`${APIConexion.getAPIConexion}Personas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: persona.nombre,
                apellido: persona.apellido,
                fechaNacimiento: persona.fechaNacimiento,
                direccion: persona.direccion,
                telefono: persona.telefono,
                foto: persona.foto,
                departamentoId: persona.departamentoId
            })
        });
    }

    async updatePersona(persona: Persona): Promise<void> {
        await fetch(`${APIConexion.getAPIConexion}Personas/${persona.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: persona.id,
                nombre: persona.nombre,
                apellido: persona.apellido,
                fechaNacimiento: persona.fechaNacimiento,
                direccion: persona.direccion,
                telefono: persona.telefono,
                foto: persona.foto,
                departamentoId: persona.departamentoId
            })
        });
    }

    async deletePersona(id: number): Promise<void> {
        await fetch(`${APIConexion.getAPIConexion}Personas/${id}`, {
            method: 'DELETE'
        });
    }
}
