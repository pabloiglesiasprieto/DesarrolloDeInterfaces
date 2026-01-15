import { injectable } from "inversify";
import Departamento from "../../domain/entities/Departamento";
import { IDepartamentosRepository } from "../../domain/interfaces/repositories/IDepartamentosRepository";
import { BaseApi } from "../api/APIConexion";

@injectable()
export class DepartamentosRepository implements IDepartamentosRepository {

    private readonly urlApi = new BaseApi("Departamentos");

    public async getDepartamentos(): Promise<Departamento[]> {
        const response = await fetch(this.urlApi.getAPIConexion);
        const data = await response.json();
        return data.map((item: any) => new Departamento(item.id, item.nombre));
    }

    public async getDepartamento(id: number): Promise<Departamento> {
        const response = await fetch(this.urlApi.getAPIConexion + "/" + id);
        const item = await response.json();
        return new Departamento(item.id, item.nombre);
    }

    public async addDepartamento(departamento: Departamento): Promise<void> {
        const response = await fetch(this.urlApi.getAPIConexion, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(departamento),
        });
        const data = await response.json();
        return data;
    }

    public async updateDepartamento(departamento: Departamento): Promise<void> {
        const response = await fetch(this.urlApi.getAPIConexion + "/" + departamento.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(departamento),
        });
        const data = await response.json();
        return data;
    }

    public async deleteDepartamento(id: number): Promise<void> {
        const response = await fetch(this.urlApi.getAPIConexion + "/" + id, {
            method: "DELETE",
        });
        const data = await response.json();
        return data;
    }
}
