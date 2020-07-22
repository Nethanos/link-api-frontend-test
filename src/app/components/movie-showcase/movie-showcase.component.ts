import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageMiddleware } from '../../middlewares/local-storage-middleware';
import { Movie } from '../../models/movie';
import { movieNamePipe } from '../../pipes/movie-name-pipe';

@Component({
  selector: 'app-movie-showcase',
  templateUrl: './movie-showcase.component.html',
  styleUrls: ['./movie-showcase.component.scss']
})
export class MovieShowcaseComponent implements OnInit {

  constructor(private router: Router, private localStorageMdw: LocalStorageMiddleware, private movieNamePipe: movieNamePipe) { }

  @Input() movie: Movie;

  isFavorite: boolean;
 

  ngOnInit(): void {
   this.checkIfMovieIsFavorite();
  }

  navigateToMovie() {
    this.router.navigate([`/movie/${this.movieNamePipe.transform(this.movie.title)}`])
  }


  addToFavorites(event){
    event.stopPropagation();

    this.localStorageMdw.addMovieToFavorites(this.movie);
    this.checkIfMovieIsFavorite()

  }

  removeFromFavorites(event) {
    event.stopPropagation();

    this.localStorageMdw.removeFromFavorites(this.movie.title);
    this.checkIfMovieIsFavorite()

  }

  checkIfMovieIsFavorite(){
    const profile = this.localStorageMdw.getProfile();

    this.isFavorite = profile.favoriteMovieList.some(favMovies => this.movieNamePipe.transform(favMovies.title) === this.movieNamePipe.transform(this.movie.title));
  }



}
