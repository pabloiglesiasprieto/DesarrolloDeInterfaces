import { inject, injectable } from "inversify";
import { TYPES } from "../../core/Types";
import Departamento from "../entities/Departamento";
import { IDepartamentosRepository } from "../interfaces/repositories/IDepartamentosRepository";

@injectable()
export class DepartamentosUseCases {
    constructor(
        @inject(TYPES.IDepartamentosRepository) private departamentoRepository: IDepartamentosRepository
    ) { }

    public getDepartamentos(): Promise<Departamento[]> {
        return this.departamentoRepository.getDepartamentos();
    }

    public getDepartamento(id: number): Promise<Departamento> {
        return this.departamentoRepository.getDepartamento(id);
    }

    public addDepartamento(departamento: Departamento): Promise<void> {
        return this.departamentoRepository.addDepartamento(departamento);
    }

    public updateDepartamento(departamento: Departamento): Promise<void> {
        return this.departamentoRepository.updateDepartamento(departamento);
    }

    public deleteDepartamento(id: number): Promise<void> {
        return this.departamentoRepository.deleteDepartamento(id);
    }
}
