import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
    providedIn: 'root',
  })
export class ProfileService  {
 

  MY_API_URL = `http://localhost:3001/profiles`;

  constructor(private http: HttpClient) {
  }


  saveProfile(profile: Profile): Observable<string> {
      return this.http.post<string>(this.MY_API_URL, profile);
  }



}
