import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
    providedIn: 'root',
  })
export class MoviesService  {
 
  API_URL = `https://movies.gateway.linkapi.solutions/v1/movies?apiKey=1719c97e-9d02-449e-aadb-67425bf715c5`;

  MY_API_URL = `http://localhost:3001/movies`;

  constructor(private http: HttpClient) {
  }


  getMovies(): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.API_URL);
  }

  getMyMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.MY_API_URL);
}

 getMovieById(movieId: string): Observable<Movie> {
     return this.http.get<Movie>(`${this.MY_API_URL}/${movieId}`)
 }

 getMovieByTitle(queryString: string): Observable<Movie[]> {
   return this.http.get<Movie[]>(this.MY_API_URL, {params: {searchQuery: queryString}})
 }

}
