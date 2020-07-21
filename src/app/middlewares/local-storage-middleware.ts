import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Movie } from '../models/movie';


@Injectable({
    providedIn: 'root',
  })
export class LocalStorageMiddleware {

    constructor() {}


    setProfile(profile: Profile): void {
        
        localStorage.setItem("link-api-profile", JSON.stringify(profile));
    }

    getProfile(): Profile {
        return JSON.parse(localStorage.getItem("link-api-profile"));
    }


    addMovieToFavorites(movieToAdd:Movie){
        const profile = this.getProfile();
        if(profile){
            const isAlreadyFavorite = profile.favoriteMovieList.some(movie => movie._id === movieToAdd._id);
            if(isAlreadyFavorite) return;

            profile.favoriteMovieList.push(movieToAdd);

            this.setProfile(profile);
        }
    }

    removeFromFavorites(movieIdToPop: string){
        const profile = this.getProfile();
        if(profile){ 
            profile.favoriteMovieList = profile.favoriteMovieList.filter(movie => movie._id !== movieIdToPop);
            this.setProfile(profile);
        }
    }

}