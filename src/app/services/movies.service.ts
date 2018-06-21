import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_key = 'a8ed1889';
  base_url = 'http://www.omdbapi.com/?apikey=' + this.api_key;
  constructor(private _http: HttpClient) { }

  getMovieByTitle(movie_title: string): Observable<Movie> {
    return this._http.get<Movie>(`${this.base_url}&t=${movie_title}`);
  }
}
