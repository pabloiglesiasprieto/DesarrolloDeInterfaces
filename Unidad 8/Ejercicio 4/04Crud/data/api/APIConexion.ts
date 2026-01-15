export class BaseApi {
    public static baseUrl: string = "https://crudpablo-cpdzatcbfch5g4gj.spaincentral-01.azurewebsites.net/API/";
    private tabla: string;

    constructor(tabla: string) {
        this.tabla = tabla;
    }

    public get getAPIConexion(): string {
        return BaseApi.baseUrl + this.tabla;
    }
}
