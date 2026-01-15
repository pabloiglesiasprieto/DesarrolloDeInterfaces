import Departamento from "../../entities/Departamento";

export interface IDepartamentosUseCases {
    getDepartamentos(): Promise<Departamento[]>;
    getDepartamento(id: number): Promise<Departamento>;
    addDepartamento(departamento: Departamento): Promise<void>;
    updateDepartamento(departamento: Departamento): Promise<void>;
    deleteDepartamento(id: number): Promise<void>;
}
