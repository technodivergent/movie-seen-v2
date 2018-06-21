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
    this.getMovieByTitle('The Matrix');
  }

  getMovieByTitle(query: string) {
    this.movieService.getMovieByTitle(query).subscribe(d => {
      this.movie.title = d['Title'];
      this.movie.year = d['Year'];
      this.movie.rated = d['Rated'];
      this.movie.released = d['Released'];
      this.movie.runtime = d['Runtime'];
      this.movie.genre = d['Genre'];
    });
    console.log(this.movie);
  }
}
