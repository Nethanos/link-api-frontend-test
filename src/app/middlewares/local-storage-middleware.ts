import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
import { Movie } from '../models/movie';
import { movieNamePipe } from '../pipes/movie-name-pipe';


@Injectable({
    providedIn: 'root',
  })
export class LocalStorageMiddleware {

    constructor(private movieNamePipe: movieNamePipe) {}


    setProfile(profile: Profile): void {
        
        localStorage.setItem("link-api-profile", JSON.stringify(profile));
    }

    getProfile(): Profile {
        return JSON.parse(localStorage.getItem("link-api-profile"));
    }


    addMovieToFavorites(movieToAdd:Movie){
        const profile = this.getProfile();
        if(profile){
            const isAlreadyFavorite = profile.favoriteMovieList.some(movie => 
                this.movieNamePipe.transform(movie.title)=== this.movieNamePipe.transform(movieToAdd.title));
            
                if(isAlreadyFavorite) return;

            profile.favoriteMovieList.push(movieToAdd);

            this.setProfile(profile);
        }
    }

    removeFromFavorites(title: string){
        const profile = this.getProfile();
        if(profile){ 
            profile.favoriteMovieList = profile.favoriteMovieList.filter(movie => this.movieNamePipe.transform(title) !==this.movieNamePipe.transform(movie.title));
            this.setProfile(profile);
        }
    }

}