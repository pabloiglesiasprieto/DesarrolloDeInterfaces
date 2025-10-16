class PersonaModel {
  private PersonaList = [];

  constructor(PersonaList: []) {
    this.PersonaList = PersonaList;
  }

  public getPersonaList() {
    return this.PersonaList;
  }

  public setPersonaList(PersonaList: []) {
    this.PersonaList = PersonaList;
  }

  
}
