export class APIConexion {
    static baseUrl = "https://crudpablo-cpdzatcbfch5g4gj.spaincentral-01.azurewebsites.net/API/";
    
    constructor() {}

    static get getAPIConexion(): string {
        return this.baseUrl;
    }
}
