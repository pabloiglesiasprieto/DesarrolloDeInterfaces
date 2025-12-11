import Persona from "../../entities/Persona";

export default interface IUseCasePersonas {
  getPersonas(): Persona[];
}
