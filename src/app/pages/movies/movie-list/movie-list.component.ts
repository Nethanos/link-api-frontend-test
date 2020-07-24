import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from '../../../models/movie';
import { finalize } from 'rxjs/operators';
import { LocalStorageMiddleware } from '../../../middlewares/local-storage-middleware';
import { FilterTypeEnum } from '../../../helpers/filter-type-enum';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements AfterViewInit {

  constructor(private movieService: MoviesService, private localStorageMdw: LocalStorageMiddleware) { }

  loadingMovies = true;

  movieList: Array<Movie>;

  searchQuery: string;

  hasMovies = true;

  readonlyMovieList: Array<Movie>;

  actualFilterType = FilterTypeEnum.FAVORITES;


  ngAfterViewInit(): void {
    this.listAllMovies();
  }


  listAllMovies(): void {
    this.loadingMovies = true;
    this.movieService.getMovies().pipe(finalize(() => this.loadingMovies = false)).subscribe(response => {
      if (response.length >= 1) {
        this.movieList = response;
        this.readonlyMovieList = response;
        this.movieService.movieList = this.readonlyMovieList;
      }

      this.hasMovies = true;

    })
  }

  searchMovie(): void {


    const filteredMovieList = this.readonlyMovieList.filter(movie =>
      movie.title.toLocaleLowerCase().includes(this.searchQuery) || movie.actors.toLocaleLowerCase().includes(this.searchQuery) ||
      movie.genre.toLocaleLowerCase().includes(this.searchQuery)
    );


    if (filteredMovieList.length >= 1) {
      this.movieList = filteredMovieList;
      this.hasMovies = true;

      return;
    }

    this.hasMovies = false;

  }


  async changeFavoritesFilter() {

    if (this.actualFilterType === FilterTypeEnum.DEFAULT) {


      const response = await this.movieService.getMovies().toPromise();

      this.movieList = response;

      this.actualFilterType = FilterTypeEnum.FAVORITES;
      return;

    } if (this.actualFilterType === FilterTypeEnum.FAVORITES) {

      const profile = this.localStorageMdw.getProfile();

      this.movieList = profile.favoriteMovieList;

      this.actualFilterType = FilterTypeEnum.DEFAULT;

      return;
    }

  }

}
