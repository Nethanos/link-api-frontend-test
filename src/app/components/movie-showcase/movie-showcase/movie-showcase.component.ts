import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';
import { Router } from '@angular/router';
import { LocalStorageMiddleware } from '../../../middlewares/local-storage-middleware';

@Component({
  selector: 'app-movie-showcase',
  templateUrl: './movie-showcase.component.html',
  styleUrls: ['./movie-showcase.component.scss']
})
export class MovieShowcaseComponent implements OnInit {

  constructor(private router: Router, private localStorageMdw: LocalStorageMiddleware) { }

  @Input() movie: Movie;

  isFavorite: boolean;
 

  ngOnInit(): void {
   this.checkIfMovieIsFavorite();
  }

  navigateToMovie() {
    this.router.navigate([`/filme/${this.movie._id}`])
  }


  addToFavorites(event){
    event.stopPropagation();

    this.localStorageMdw.addMovieToFavorites(this.movie);
    this.checkIfMovieIsFavorite()

  }

  removeFromFavorites(event) {
    event.stopPropagation();

    this.localStorageMdw.removeFromFavorites(this.movie._id);
    this.checkIfMovieIsFavorite()

  }

  checkIfMovieIsFavorite(){
    const profile = this.localStorageMdw.getProfile();

    this.isFavorite = profile.favoriteMovieList.some(favMovies => favMovies._id === this.movie._id);
  }

}
