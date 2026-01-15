import { Departamento } from "../../domain/entities/Departamento";
import { IDepartamentosRepository } from "../../domain/interfaces/repositories/IDepartamentosRepository";
import { APIConexion } from "../api/APIConexion";

export class DepartamentosRepository implements IDepartamentosRepository {
    async getDepartamentos(): Promise<Departamento[]> {
        const response = await fetch(`${APIConexion.getAPIConexion}Departamentos`);
        const data = await response.json();
        return data.map((d: any) => new Departamento(d.id, d.nombre));
    }

    async getDepartamento(id: number): Promise<Departamento> {
        const response = await fetch(`${APIConexion.getAPIConexion}Departamentos/${id}`);
        const data = await response.json();
        return new Departamento(data.id, data.nombre);
    }

    async addDepartamento(departamento: Departamento): Promise<void> {
        await fetch(`${APIConexion.getAPIConexion}Departamentos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: departamento.nombre
            })
        });
    }

    async updateDepartamento(departamento: Departamento): Promise<void> {
        await fetch(`${APIConexion.getAPIConexion}Departamentos/${departamento.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: departamento.id,
                nombre: departamento.nombre
            })
        });
    }

    async deleteDepartamento(id: number): Promise<void> {
        await fetch(`${APIConexion.getAPIConexion}Departamentos/${id}`, {
            method: 'DELETE'
        });
    }
}
