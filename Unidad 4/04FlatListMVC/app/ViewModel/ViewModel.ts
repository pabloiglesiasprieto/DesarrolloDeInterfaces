import { Persona } from "../Model/Entidades/Persona";

export class ViewModel {
  listaPersonas: Persona[] = [];

  constructor(listaPersonas: Persona[]) {
    this.listaPersonas = listaPersonas;
  }
}
