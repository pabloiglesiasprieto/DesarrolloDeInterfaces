import { inject, injectable } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";
import { TYPES } from "../../core/Types";
import { Departamento } from "../../domain/entities/Departamento";
import { IDepartamentosUseCases } from "../../domain/interfaces/useCases/IDepartamentosUseCases";

@injectable()
export class DepartamentosViewModel {
    private readonly _departamentosUseCases: IDepartamentosUseCases;
    public departamentos: Departamento[] = [];

    constructor(@inject(TYPES.IDepartamentosUseCases) departamentosUseCases: IDepartamentosUseCases) {
        this._departamentosUseCases = departamentosUseCases;
        makeAutoObservable(this);
    }

    async getDepartamentos() {
        try {
            const data = await this._departamentosUseCases.getDepartamentos();
            runInAction(() => {
                this.departamentos = data;
            });
            return data;
        } catch (error) {
            console.error("Error fetching departamentos:", error);
            return [];
        }
    }

    async getDepartamento(id: number) {
        return await this._departamentosUseCases.getDepartamento(id);
    }

    async addDepartamento(departamento: Departamento) {
        await this._departamentosUseCases.addDepartamento(departamento);
        await this.getDepartamentos();
    }

    async updateDepartamento(departamento: Departamento) {
        await this._departamentosUseCases.updateDepartamento(departamento);
        await this.getDepartamentos();
    }

    async deleteDepartamento(id: number) {
        await this._departamentosUseCases.deleteDepartamento(id);
        await this.getDepartamentos();
    }
}
