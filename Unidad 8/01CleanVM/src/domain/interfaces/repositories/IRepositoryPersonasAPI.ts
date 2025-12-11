import Persona from "../../../domain/entities/Persona";

export default interface IRepositoryPersonasAPI {
  getPersonas(): Promise<Persona[]>;
}
