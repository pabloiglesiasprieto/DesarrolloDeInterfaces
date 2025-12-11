import Persona from "../../../domain/entities/Persona";

export default interface IRepositoryPersonas {
  getListadoCompletoPersonas(): Persona[];
}
