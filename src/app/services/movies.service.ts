import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_key = 'a8ed1889';
  base_url = 'http://www.omdbapi.com/?apikey=' + this.api_key;
  constructor(private _http: HttpClient) { }

  getMovie(movie_title: string) {
    const query = '&t=' + movie_title;
    console.log(this.base_url + query);
    return this._http.get(this.base_url + query);
  }
}
