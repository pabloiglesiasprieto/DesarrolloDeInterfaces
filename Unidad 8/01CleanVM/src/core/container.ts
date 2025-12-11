import { Container } from "inversify";
import "reflect-metadata";
import { RepositoryPersonasAPI } from "../data/repositories/RepositoryPersonasAPI";
import {
  RepositoryPersonas
} from "../data/repositories/RepositoryPersonasMock";

import PersonaListVM from "../app/ViewModels/PersonaListVM";
import { TYPES } from "../core/types";
import BaseAPI from "../data/API/BaseAPI";
import IRepositoryPersonas from "../domain/interfaces/repositories/IRepositoryPersona";
import IRepositoryPersonasAPI from "../domain/interfaces/repositories/IRepositoryPersonasAPI";
import IUseCasePersonas from "../domain/interfaces/useCases/IUseCasePersonas";
import IUseCasePersonasAPI from "../domain/interfaces/useCases/IUseCasePersonasAPI";
import { UseCasePersonasMOCK } from "../domain/useCases/UseCasePersonas";
import { UseCasePersonasAPI } from "../domain/useCases/useCasePersonaAPI";

const container = new Container();

// Vinculamos la interfaz con su implementación concreta
container
  .bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(RepositoryPersonas);

container.bind<PersonaListVM>(TYPES.IndexVM).to(PersonaListVM);

container.bind<IUseCasePersonas>(TYPES.IUseCasePersonasMock).to(UseCasePersonasMOCK);

container.bind<IRepositoryPersonasAPI>(TYPES.IRepositoryPersonasAPI).to(RepositoryPersonasAPI)

container.bind<IUseCasePersonasAPI>(TYPES.IUseCasePersonasAPI).to(UseCasePersonasAPI);

container.bind<BaseAPI>(TYPES.BaseAPI).to(BaseAPI);

export { container };

