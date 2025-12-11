export default class BaseAPI {

    private readonly BASE_URL: string = "https://crudpablo-cpdzatcbfch5g4gj.spaincentral-01.azurewebsites.net/API/Personas";

    public getApiUrl(endpoint : string): string {
        const url = new URL(endpoint, this.BASE_URL);
        return url.toString();
    }

    public getDefaultHeaders(): HeadersInit {
    return {
        "Content-Type": "application/json",
    // Puedes añadir aqui otros headers (ej. Authorization)


        } 
    }
}