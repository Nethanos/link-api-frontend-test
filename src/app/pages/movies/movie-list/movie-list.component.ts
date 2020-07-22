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
export class MovieListComponent implements OnInit, AfterViewInit {

  constructor(private movieService: MoviesService, private localStorageMdw: LocalStorageMiddleware) { }

  loadingMovies = true;

  movieList: Array<Movie>;

  searchQuery: string;

  hasMovies = true;

  actualFilterType = FilterTypeEnum.FAVORITES;

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    this.listAllMovies();
  }


  listAllMovies(): void {
    this.movieService.getMyMovies().pipe(finalize(() => this.loadingMovies = false) ).subscribe(response => {
      if(response.length >= 1) this.movieList = response;
 
      this.hasMovies = true;
       
     })
  }

  searchMovie(): void {

   this.movieService.getMovieByTitle(this.searchQuery).subscribe(response => {

     if(response.length >= 1){
      this.movieList = response;
      this.hasMovies = true;
     }else {
       this.hasMovies = false;
     }
   });
  }


  async changeFavoritesFilter() {

    if(this.actualFilterType === FilterTypeEnum.DEFAULT){
   

      const response =  await  this.movieService.getMyMovies().toPromise();

      this.movieList = response;
 
       this.actualFilterType = FilterTypeEnum.FAVORITES;
       return; 
      
    }if(this.actualFilterType === FilterTypeEnum.FAVORITES) {
    
      const profile = this.localStorageMdw.getProfile();

      this.movieList = profile.favoriteMovieList;

      this.actualFilterType = FilterTypeEnum.DEFAULT;

      return;
    }

 
  }

}
