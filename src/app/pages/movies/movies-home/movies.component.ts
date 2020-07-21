import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService } from '../../../service/movies.service';
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

  ngOnInit(): void {

  
  }

  ngAfterViewInit(): void {
    this.movieService.getMyMovies().pipe(finalize(() => this.loadingMovies = false) ).subscribe(response => {
     if(response.length > 1) this.movieList = response;
      
    })
  }

}
