import { inject, injectable } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";
import { TYPES } from "../../core/Types";
import Persona from "../../domain/entities/Persona";
import { IPersonasUseCases } from "../../domain/interfaces/useCases/IPersonasUseCases";

@injectable()
export default class PersonasViewModel {
  public personas: Persona[] = [];
  public personaSeleccionada: Persona | null = null;
  private readonly useCases: IPersonasUseCases;

  constructor(
    @inject(TYPES.IPersonasUseCases) private personaUseCases: IPersonasUseCases
  ) {
    this.useCases = personaUseCases;
    makeAutoObservable(this);
  }

  public async getPersonas(): Promise<Persona[]> {
    const personas = await this.useCases.getPersonas();
    console.log(personas);
    runInAction(() => {
      this.personas = personas;
    });

    return personas;
  }

  public async getPersona(id: number): Promise<Persona> {

    return await this.useCases.getPersona(id);
  }

  public getPersonaSeleccionada(): Persona | null {
    return this.personaSeleccionada;
  }

  public setPersonaSeleccionada(persona: Persona | null): void {
    this.personaSeleccionada = persona;
    alert('Persona seleccionada: ' + this.personaSeleccionada?.nombre + ' ' + this.personaSeleccionada?.apellido);
  }

  public async addPersona(persona: Persona): Promise<void> {
    await this.useCases.addPersona(persona);
  }

  public async updatePersona(persona: Persona): Promise<void> {
    await this.useCases.updatePersona(persona);
  }

  public async deletePersona(id: number): Promise<void> {
    await this.useCases.deletePersona(id);
  }
}
