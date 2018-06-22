import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { Query } from '../models/query';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  query: Query[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.query = [];
    this.search('The Matrix');
  }

  search(query: string) {
    this.movieService.search(query).subscribe(data => {
      this.query = data;
    });
  }
}
