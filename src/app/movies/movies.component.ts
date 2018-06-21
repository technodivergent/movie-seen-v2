import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movie = new Movie();
    this.getMovie('The Matrix');
  }

  getMovie(query: string) {
    this.movieService.getMovie(query).subscribe(d => {
      this.movie.title = d['Title'];
      this.movie.year = d['Year'];
    });
    console.log(this.movie);
  }
}
