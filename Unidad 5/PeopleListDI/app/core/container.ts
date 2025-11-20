import { Container } from "inversify";
import "reflect-metadata";
import { IRepositoryPersonas, PersonasRepository } from "../models/data/RepositoryPersona";
import { PeopleListVM } from "../viewmodels/IndexVM";
import { TYPES } from "./types";
import { RepositoryPersonaEmpty } from "../models/data/RepositoryPersonaEmpty";
import { RepositoryPersona100 } from "../models/data/RepositoryPersona100";

const container = new Container();

// Vinculamos la interfaz con su implementación concreta
container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(RepositoryPersona100);
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);

export { container, TYPES };
