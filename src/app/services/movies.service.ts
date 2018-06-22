import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Query } from '../models/query';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  api_key = 'a8ed1889';
  base_url = 'http://www.omdbapi.com/?apikey=' + this.api_key;
  constructor(private _http: HttpClient) { }

  search(query: string): Observable<any> {
    return this._http.get<Query>(`${this.base_url}&s=${query}`).pipe(
      map(data => {
        const results: Query[] = [];
        data['Search'].forEach( i => {
          const search = new Query();
          search.title = i['Title'];
          search.year = i['Year'];
          search.imdbID = i['imdbID'];
          search.type = i['Type'];
          search.poster = i['Poster'];
          results.push(search);
        });
        return results;
      })
    );
  }

  getMovieByTitle(movie_title: string): Observable<any> {
    return this._http.get<Movie>(`${this.base_url}&t=${movie_title}`).pipe(
      map( data => {
        const movie: Movie = new Movie();
        movie.title = data['Title'];
        movie.year = data['Year'];
        movie.rated = data['Rated'];
        movie.released = data['Released'];
        movie.runtime = data['Runtime'];
        movie.genre = data['Genre'];
        movie.director = data['Director'];
        movie.writer = data['Writer'];
        movie.actors = data['Actors'];
        movie.awards = data['Awards'];
        movie.poster = data['Poster'];
        movie.ratings = data['Ratings'];
        movie.metascore = data['Metascore'];
        movie.imdbRating = data['imdbRating'];
        movie.imdbVotes = data['imdbVotes'];
        movie.imdbID = data['imdbID'];
        movie.type = data['Type'];
        movie.dvdRelease = data['DVD'];
        movie.boxOffice = data['BoxOffice'];
        movie.production = data['Production'];
        movie.website = data['Website'];
        movie.response = data['Response'];
        return movie;
      })
    );
  }
}
