import Data from "../Model/Data/ListadoPersonas";
import Persona from "../Model/Entities/Persona";

class ViewModel {
  private listadoPersonas: Persona[];

  constructor() {
    this.listadoPersonas = Data.getPersonaList();
  }

  public get ListadoPersonas(): Persona[] {
    return this.listadoPersonas;
  }
}

export default ViewModel;
