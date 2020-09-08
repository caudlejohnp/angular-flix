import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";

@Component({
  selector: "app-search-box",
  templateUrl: "./search-box.component.html",
  styleUrls: ["./search-box.component.css"],
})
export class SearchBoxComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  loadSearch(event): void {
    this.movieService.searchForMovies(event.target.value);
  }
  
}
