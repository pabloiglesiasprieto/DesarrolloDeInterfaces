import Persona from "../Entities/Persona";

class ListadoPersonas {
  private static personaList: Persona[] = [
    new Persona(1, "Juan Pérez", 28),
    new Persona(2, "María Gómez", 34),
    new Persona(3, "Carlos Ramírez", 45),
    new Persona(4, "Ana Torres", 23),
    new Persona(5, "Luis Herrera", 37),
    new Persona(6, "Laura Sánchez", 31),
    new Persona(7, "Pedro Castillo", 40),
    new Persona(8, "Sofía Delgado", 29),
    new Persona(9, "Jorge Fernández", 36),
    new Persona(10, "Elena Cruz", 27),
    new Persona(11, "Andrés Morales", 41),
    new Persona(12, "Isabel Rojas", 33),
    new Persona(13, "Diego Navarro", 38),
    new Persona(14, "Lucía Vargas", 26),
    new Persona(15, "Fernando Soto", 44),
    new Persona(16, "Claudia Méndez", 32),
    new Persona(17, "Raúl Aguirre", 39),
    new Persona(18, "Patricia Reyes", 30),
    new Persona(19, "Héctor León", 35),
    new Persona(20, "Gabriela Molina", 25),
    new Persona(21, "Ricardo Peña", 43),
    new Persona(22, "Verónica Estrada", 28),
    new Persona(23, "Miguel Campos", 37),
    new Persona(24, "Natalia Ibáñez", 24),
    new Persona(25, "Eduardo Salazar", 46),
    new Persona(26, "Camila Paredes", 31),
    new Persona(27, "Sebastián Carrillo", 42),
    new Persona(28, "Valeria Fuentes", 27),
    new Persona(29, "Manuel Rivas", 36),
    new Persona(30, "Paula Zamora", 33),
  ];

  public static getPersonaList(): Persona[] {
    return this.personaList;
  }
}
export default ListadoPersonas;
