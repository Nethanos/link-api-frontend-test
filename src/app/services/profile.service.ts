import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
    providedIn: 'root',
  })
export class ProfileService  {
 

  MY_API_URL = `https://linkapi-movie-list-backend.herokuapp.com/profiles`;

  constructor(private http: HttpClient) {
  }


  saveProfile(profile: Profile): Observable<Profile> {
      return this.http.post<Profile>(this.MY_API_URL, profile);
  }



}
