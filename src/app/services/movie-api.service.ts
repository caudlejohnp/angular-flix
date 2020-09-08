import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieApiService {
  private readonly URL = "https://api.themoviedb.org/3/search/multi";
  private readonly API_KEY = "742409deb22e895f67b03956c9c73622";
  constructor(private httpClient: HttpClient) {}

  get(searchTerm: string): Promise<any> {
    const params: HttpParams = new HttpParams()
      .append("api_key", this.API_KEY)
      .append("query", searchTerm);

    return this.httpClient
      .get<any[]>(this.URL, { params })
      .toPromise();
  }
}
