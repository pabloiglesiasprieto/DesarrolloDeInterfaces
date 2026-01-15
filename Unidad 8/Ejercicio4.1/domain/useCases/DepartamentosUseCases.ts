import { inject, injectable } from "inversify";
import { TYPES } from "../../core/Types";
import { Departamento } from "../entities/Departamento";
import { IDepartamentosRepository } from "../interfaces/repositories/IDepartamentosRepository";
import { IDepartamentosUseCases } from "../interfaces/useCases/IDepartamentosUseCases";

@injectable()
export class DepartamentosUseCases implements IDepartamentosUseCases {
    private _departamentosRepository: IDepartamentosRepository;

    constructor(@inject(TYPES.IDepartamentosRepository) departamentosRepository: IDepartamentosRepository) {
        this._departamentosRepository = departamentosRepository;
    }

    async getDepartamentos(): Promise<Departamento[]> {
        return await this._departamentosRepository.getDepartamentos();
    }

    async getDepartamento(id: number): Promise<Departamento> {
        return await this._departamentosRepository.getDepartamento(id);
    }

    async addDepartamento(departamento: Departamento): Promise<void> {
        return await this._departamentosRepository.addDepartamento(departamento);
    }

    async updateDepartamento(departamento: Departamento): Promise<void> {
        return await this._departamentosRepository.updateDepartamento(departamento);
    }

    async deleteDepartamento(id: number): Promise<void> {
        return await this._departamentosRepository.deleteDepartamento(id);
    }
}
