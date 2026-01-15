import { inject, injectable } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";
import { TYPES } from "../../core/Types";
import Departamento from "../../domain/entities/Departamento";
import { IDepartamentosUseCases } from "../../domain/interfaces/useCases/IDepartamentosUseCases";

@injectable()
export default class DepartamentosViewModel {
    public departamentos: Departamento[] = [];
    public departamentoSeleccionado: Departamento | null = null;
    private readonly useCases: IDepartamentosUseCases;

    constructor(
        @inject(TYPES.IDepartamentosUseCases) private departamentoUseCases: IDepartamentosUseCases
    ) {
        this.useCases = departamentoUseCases;
        makeAutoObservable(this);
    }

    public async getDepartamentos(): Promise<Departamento[]> {
        const departamentos = await this.useCases.getDepartamentos();
        runInAction(() => {
            this.departamentos = departamentos;
        });
        return departamentos;
    }

    public async getDepartamento(id: number): Promise<Departamento> {
        return await this.useCases.getDepartamento(id);
    }

    public getDepartamentoSeleccionado(): Departamento | null {
        return this.departamentoSeleccionado;
    }

    public setDepartamentoSeleccionado(departamento: Departamento | null): void {
        this.departamentoSeleccionado = departamento;
    }

    public async addDepartamento(departamento: Departamento): Promise<void> {
        await this.useCases.addDepartamento(departamento);
    }

    public async updateDepartamento(departamento: Departamento): Promise<void> {
        await this.useCases.updateDepartamento(departamento);
    }

    public async deleteDepartamento(id: number): Promise<void> {
        await this.useCases.deleteDepartamento(id);
    }
}
