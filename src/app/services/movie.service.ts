import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { MovieApiService } from "./movie-api.service";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  searchResutls: any[] = [];
  myMovieList: any[] = [];

  constructor(
    private apiService: ApiService,
    private movieApiService: MovieApiService
  ) {}

  getSearchResults(): any[] {
    return this.searchResutls;
  }

  getMovieList(): any[] {
    return this.myMovieList;
  }

  async searchForMovies(searchTerm: string): Promise<void> {
    const response = await this.movieApiService.get(searchTerm);
    this.searchResutls.length = 0;
    this.searchResutls.push(...response.results);
  }

  async loadMovieList(): Promise<void> {
    const response = await this.apiService.get();
    this.myMovieList.length = 0;
    this.myMovieList.push(...response);
  }

  async saveToList(movie: any): Promise<void> {
    await this.apiService.post(movie);
    await this.loadMovieList();
  }
}
