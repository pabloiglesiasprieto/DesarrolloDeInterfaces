import Persona from "@/src/domain/entities/Persona";
import { injectable } from "inversify";
import IRepositoryPersonas from "../../domain/interfaces/repositories/IRepositoryPersona";

@injectable()
export class RepositoryPersonas implements IRepositoryPersonas {
  getListadoCompletoPersonas(): Persona[] {
    const personas: Persona[] = [];

    personas.push(new Persona(1, "Pablo", "Iglesias"));
    personas.push(new Persona(2, "Juan", "Gonzalez"));
    personas.push(new Persona(3, "Ana", "Lopez"));

    return personas;
  }
}

@injectable()
export class RepositoryPersonas100 implements IRepositoryPersonas {
  getListadoCompletoPersonas(): Persona[] {
    const personas: Persona[] = [];

    personas.push(new Persona(1, "Pablo", "Iglesias"));
    personas.push(new Persona(2, "Juan", "Gonzalez"));
    personas.push(new Persona(3, "Ana", "Lopez"));
    personas.push(new Persona(4, "Mario", "Serrano"));
    personas.push(new Persona(5, "Lucia", "Martinez"));
    personas.push(new Persona(6, "Carlos", "Fernandez"));
    personas.push(new Persona(7, "Laura", "Santos"));
    personas.push(new Persona(8, "Diego", "Calvo"));
    personas.push(new Persona(9, "Marta", "Rivas"));
    personas.push(new Persona(10, "Sergio", "Campos"));
    personas.push(new Persona(11, "Elena", "Ramirez"));
    personas.push(new Persona(12, "Alberto", "Navarro"));
    personas.push(new Persona(13, "Sara", "Duran"));
    personas.push(new Persona(14, "Jorge", "Benitez"));
    personas.push(new Persona(15, "Patricia", "Cano"));
    personas.push(new Persona(16, "Victor", "Luna"));
    personas.push(new Persona(17, "Carmen", "Mendoza"));
    personas.push(new Persona(18, "Roberto", "Rojas"));
    personas.push(new Persona(19, "Isabel", "Delgado"));
    personas.push(new Persona(20, "Hector", "Nuñez"));
    personas.push(new Persona(21, "Cristina", "Rey"));
    personas.push(new Persona(22, "Alejandro", "Cortes"));
    personas.push(new Persona(23, "Teresa", "Aranda"));
    personas.push(new Persona(24, "Gonzalo", "Vera"));
    personas.push(new Persona(25, "Paula", "Soto"));
    personas.push(new Persona(26, "Rafael", "Costa"));
    personas.push(new Persona(27, "Silvia", "Estevez"));
    personas.push(new Persona(28, "Manuel", "Aguilar"));
    personas.push(new Persona(29, "Beatriz", "Pascual"));
    personas.push(new Persona(30, "Fernando", "Ortiz"));
    personas.push(new Persona(31, "Natalia", "Solano"));
    personas.push(new Persona(32, "Andres", "Bravo"));
    personas.push(new Persona(33, "Rocio", "Sierra"));
    personas.push(new Persona(34, "Adrian", "Galvez"));
    personas.push(new Persona(35, "Sandra", "Bautista"));
    personas.push(new Persona(36, "Oscar", "Marin"));
    personas.push(new Persona(37, "Noelia", "Peña"));
    personas.push(new Persona(38, "Hugo", "Mora"));
    personas.push(new Persona(39, "Eva", "Blanco"));
    personas.push(new Persona(40, "Ignacio", "Salas"));
    personas.push(new Persona(41, "Alicia", "Del Valle"));
    personas.push(new Persona(42, "Raul", "Ceballos"));
    personas.push(new Persona(43, "Lorena", "Crespo"));
    personas.push(new Persona(44, "Fermin", "Ibarra"));
    personas.push(new Persona(45, "Julia", "Acevedo"));
    personas.push(new Persona(46, "Marcos", "Salazar"));
    personas.push(new Persona(47, "Nuria", "Medina"));
    personas.push(new Persona(48, "Mateo", "Herrera"));
    personas.push(new Persona(49, "Ines", "Pineda"));
    personas.push(new Persona(50, "Eduardo", "Barrios"));
    personas.push(new Persona(51, "Claudia", "Palacios"));
    personas.push(new Persona(52, "Pedro", "Carretero"));
    personas.push(new Persona(53, "Monica", "Corral"));
    personas.push(new Persona(54, "Esteban", "Llorente"));
    personas.push(new Persona(55, "Veronica", "Rosales"));
    personas.push(new Persona(56, "Tomas", "Alonso"));
    personas.push(new Persona(57, "Irene", "Miranda"));
    personas.push(new Persona(58, "Francisco", "Vidal"));
    personas.push(new Persona(59, "Sonia", "Cuesta"));
    personas.push(new Persona(60, "Javier", "Pozo"));
    personas.push(new Persona(61, "Helena", "Andrada"));
    personas.push(new Persona(62, "Ernesto", "Galindo"));
    personas.push(new Persona(63, "Pilar", "Ochoa"));
    personas.push(new Persona(64, "Guillermo", "Arroyo"));
    personas.push(new Persona(65, "Marina", "Velasco"));
    personas.push(new Persona(66, "Samuel", "Cordero"));
    personas.push(new Persona(67, "Angela", "Mejias"));
    personas.push(new Persona(68, "Kevin", "Lagos"));
    personas.push(new Persona(69, "Ainhoa", "Requena"));
    personas.push(new Persona(70, "David", "Cuervo"));
    personas.push(new Persona(71, "Yolanda", "Bermudez"));
    personas.push(new Persona(72, "Marc", "Ruiz"));
    personas.push(new Persona(73, "Lara", "Reyero"));
    personas.push(new Persona(74, "Felipe", "Arcos"));
    personas.push(new Persona(75, "Nerea", "Sanchez"));
    personas.push(new Persona(76, "Arturo", "Calderon"));
    personas.push(new Persona(77, "Olga", "Saavedra"));
    personas.push(new Persona(78, "Bruno", "Vallejo"));
    personas.push(new Persona(79, "Miriam", "Pantoja"));
    personas.push(new Persona(80, "Albert", "Roldan"));
    personas.push(new Persona(81, "Amparo", "Monreal"));
    personas.push(new Persona(82, "Elias", "Toledo"));
    personas.push(new Persona(83, "Judith", "Bernal"));
    personas.push(new Persona(84, "Ramon", "Segura"));
    personas.push(new Persona(85, "Ariadna", "Puch"));
    personas.push(new Persona(86, "Santiago", "Becerra"));
    personas.push(new Persona(87, "Tamara", "Jordán"));
    personas.push(new Persona(88, "Lucas", "Arnaiz"));
    personas.push(new Persona(89, "Aurelia", "Collado"));
    personas.push(new Persona(90, "Marco", "Quintero"));
    personas.push(new Persona(91, "Carla", "Serrat"));
    personas.push(new Persona(92, "Ismael", "Caballero"));
    personas.push(new Persona(93, "Rebeca", "Lobo"));
    personas.push(new Persona(94, "Adolfo", "Molero"));
    personas.push(new Persona(95, "Daniela", "Serrano"));
    personas.push(new Persona(96, "Enrique", "Saiz"));
    personas.push(new Persona(97, "Esther", "Ocampo"));
    personas.push(new Persona(98, "Pol", "Lozano"));
    personas.push(new Persona(99, "Mirko", "Robles"));
    personas.push(new Persona(100, "Sofia", "Cortes"));

    return personas;
  }
}

@injectable()
export class RepositoryPersonasEmpty implements IRepositoryPersonas {
  getListadoCompletoPersonas(): Persona[] {
    const personas: Persona[] = [];

    return personas;
  }
}


