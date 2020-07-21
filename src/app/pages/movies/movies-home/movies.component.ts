import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from '../../../models/movie';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit {

  constructor(private movieService: MoviesService) { }

  loadingMovies = true;

  movieList: Array<Movie>;

  searchQuery: string;

  hasMovies = true;

  ngOnInit(): void {
  
  }

  ngAfterViewInit(): void {
    this.movieService.getMyMovies().pipe(finalize(() => this.loadingMovies = false) ).subscribe(response => {
     if(response.length >= 1) this.movieList = response;

     this.hasMovies = true;
      
    })
  }

  searchMovie(){

   this.movieService.getMovieByTitle(this.searchQuery).subscribe(response => {

     if(response.length >= 1){
      this.movieList = response;
      this.hasMovies = true;
     }else {
       this.hasMovies = false;
     }


   });
  }

}
