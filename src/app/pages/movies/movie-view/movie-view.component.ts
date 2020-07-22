import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
import { LocalStorageMiddleware } from '../../../middlewares/local-storage-middleware';
import { movieNamePipe } from '../../../pipes/movie-name-pipe';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MoviesService, 
    private localStorageMdw: LocalStorageMiddleware, private movieNamePipe: movieNamePipe) { }

  @Input() movie: Movie;

  loadingMovie = true;

  movieCast: Array<string>;

  movieGenre: Array<string>;

  isFavorite: boolean;
  async ngOnInit(): Promise<void> {
    const movieName: string = this.route.snapshot.params['id'];


    const movieList = await this.movieService.getMovies().toPromise();

    const foundMovie = movieList.filter(movie => this.movieNamePipe.transform(movieName) === this.movieNamePipe.transform(movie.title))[0];

    if(foundMovie){
      this.movie = foundMovie;
      this.loadingMovie = !this.loadingMovie;
      this.handleFavoriteState();
    }


  }


  handleFavoriteState() {
    const profile = this.localStorageMdw.getProfile();

     this.isFavorite = profile.favoriteMovieList.some(favoriteMovies => 
      this.movieNamePipe.transform(favoriteMovies.title) === this.movieNamePipe.transform(this.movie.title));

  }

  removeFromFavorites() {
    this.localStorageMdw.removeFromFavorites(this.movie.title);
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

