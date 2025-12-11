import { TYPES } from "@/src/core/types";
import Persona from "@/src/domain/entities/Persona";
import IUseCasePersonasAPI from "@/src/domain/interfaces/useCases/IUseCasePersonasAPI";
import { inject } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";

export default class PersonaListVM {
  private _personasList: Persona[] = [];
  private _personaSeleccionada: Persona;
  private _isLoading: boolean = false;
  private _error: string | null = null;

  constructor(
    @inject(TYPES.IUseCasePersonasAPI)
    private useCaseGetPersonas: IUseCasePersonasAPI
  ) {
    this._personaSeleccionada = new Persona(0, "Pablo", "Iglesias");
    
    makeAutoObservable(this);

    // Cargar personas al inicializar
    
  }

  // Getter devuelve el array directamente (ya no es Promise)
  public get personasList(): Persona[] {
    return this._personasList;
  }

  public get personaSeleccionada(): Persona {
    return this._personaSeleccionada;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public get error(): string | null {
    return this._error;
  }

  public set personaSeleccionada(value: Persona) {
    this._personaSeleccionada = value;
    alert(
      `Persona seleccionada en el VM: ${this._personaSeleccionada.Nombre} ${this._personaSeleccionada.Apellido}`
    );
  }

  async cargarPersonas() {
    this._isLoading = true;
    this._error = null;

    try {
      const data = await this.useCaseGetPersonas.getPersonas();
      this._personasList = data;
      console.log(data[0]);

      // Usar runInAction para modificar el estado observable después de await
      runInAction(() => {
        this._personasList = data;
        this._isLoading = false;
      });
    } catch (e: any) {
      runInAction(() => {
        this._error = e.message || "Error desconocido";
        this._isLoading = false;
      });
      alert(`Error al cargar personas: ${e.message}`);
    }
  }
}
