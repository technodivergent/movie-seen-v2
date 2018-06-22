import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Title } from '../models/title';
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

  getTitleByID(movie_id: string): Observable<any> {
    return this._http.get<Title>(`${this.base_url}&i=${movie_id}`).pipe(
      map( data => {
        const title: Title = new Title();
        title.title = data['Title'];
        title.year = data['Year'];
        title.rated = data['Rated'];
        title.released = data['Released'];
        title.runtime = data['Runtime'];
        title.genre = data['Genre'];
        title.director = data['Director'];
        title.writer = data['Writer'];
        title.actors = data['Actors'];
        title.plot = data['Plot'];
        title.language = data['Language'];
        title.country = data['Country'];
        title.awards = data['Awards'];
        title.poster = data['Poster'];
        title.ratings = data['Ratings'];
        title.metascore = data['Metascore'];
        title.imdbRating = data['imdbRating'];
        title.imdbVotes = data['imdbVotes'];
        title.imdbID = data['imdbID'];
        title.type = data['Type'];
        title.dvdRelease = data['DVD'];
        title.boxOffice = data['BoxOffice'];
        title.production = data['Production'];
        title.website = data['Website'];
        title.response = data['Response'];
        console.log(title);
        return title;
      })
    );
  }
}
