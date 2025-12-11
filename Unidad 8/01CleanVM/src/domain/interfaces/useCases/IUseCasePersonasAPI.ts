import Persona from "../../entities/Persona";
export default interface IUseCasePersonasAPI {
    getPersonas(): Promise<Persona[]>;
}