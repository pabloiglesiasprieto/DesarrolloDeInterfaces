import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./Types";

// Interfaces
import { IDepartamentosRepository } from "../domain/interfaces/repositories/IDepartamentosRepository";
import { IPersonasRepository } from "../domain/interfaces/repositories/IPersonasRepository";
import { IDepartamentosUseCases } from "../domain/interfaces/useCases/IDepartamentosUseCases";
import { IPersonasUseCases } from "../domain/interfaces/useCases/IPersonasUseCases";

// Implementations
import { DepartamentosRepository } from "../data/repositories/DepartamentosRepository";
import { PersonasRepository } from "../data/repositories/PersonasRepository";
import { DepartamentosUseCases } from "../domain/useCases/DepartamentosUseCases";
import { PersonasUseCases } from "../domain/useCases/PersonasUseCases";

const container = new Container();

// Repositories
container.bind<IDepartamentosRepository>(TYPES.IDepartamentosRepository).to(DepartamentosRepository);
container.bind<IPersonasRepository>(TYPES.IPersonasRepository).to(PersonasRepository);

// UseCases
container.bind<IDepartamentosUseCases>(TYPES.IDepartamentosUseCases).to(DepartamentosUseCases);
container.bind<IPersonasUseCases>(TYPES.IPersonasUseCases).to(PersonasUseCases);

// ViewModels
import DepartamentosViewModel from "../app/viewModel/DepartamentosViewModel";
import PersonasViewModel from "../app/viewModel/PersonasViewModel";

container.bind<DepartamentosViewModel>(TYPES.DepartamentosViewModel).to(DepartamentosViewModel).inSingletonScope();
container.bind<PersonasViewModel>(TYPES.PersonasViewModel).to(PersonasViewModel).inSingletonScope();

export default container;
