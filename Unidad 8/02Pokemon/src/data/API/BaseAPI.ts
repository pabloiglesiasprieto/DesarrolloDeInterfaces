export default class BaseAPI {
  private readonly BASE_URL: string =
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=";

  public getApiUrl(endpoint: string): string {
    const url = new URL(endpoint, this.BASE_URL);
    return url.toString();
  }

  public getDefaultHeaders(): HeadersInit {
    return {
      "Content-Type": "application/json",
    };
  }
}
