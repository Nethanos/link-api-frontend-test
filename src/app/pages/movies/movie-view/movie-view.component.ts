import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { LocalStorageMiddleware } from '../../../middlewares/local-storage-middleware';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MoviesService, private localStorageMdw: LocalStorageMiddleware) { }

  @Input() movie: Movie;

  loadingMovie = true;

  movieCast: Array<string>;

  movieGenre: Array<string>;

  isFavorite: boolean;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.movieService.getMovieById(id).subscribe(response => {
      this.movie = response;

      this.handleMovieData(this.movie);

      this.loadingMovie = !this.loadingMovie;
      
      this.handleFavoriteState();
    })

  }


  handleFavoriteState() {
    const profile = this.localStorageMdw.getProfile();

     this.isFavorite = profile.favoriteMovieList.some(favoriteMovies => favoriteMovies._id === this.movie._id);

  }

  removeFromFavorites() {
    this.localStorageMdw.removeFromFavorites(this.movie._id);
    this.handleFavoriteState();
  }


  addToFavorites(){
    this.localStorageMdw.addMovieToFavorites(this.movie);
    this.handleFavoriteState();

  }


  handleMovieData(movie: Movie): void {
    this.movieCast = movie.actors.split(',');
    this.movieGenre = movie.genre.split(',');
  }

}

