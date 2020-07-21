import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';
import {ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  @Input() movie: Movie;

  loadingMovie = true;

  movieCast: Array<string>;

  movieGenre: Array<string>;

   ngOnInit():void {
    const id = this.route.snapshot.params['id'];

     this.movieService.getMovieById(id).subscribe(response => {
       this.movie = response;

      this.handleMovieData(this.movie);

       this.loadingMovie = !this.loadingMovie;
     })

  }


  handleMovieData(movie: Movie) {
    this.movieCast = movie.actors.split(',');
    this.movieGenre = movie.genre.split(',');
    console.log(this.movieCast);
  }

}

