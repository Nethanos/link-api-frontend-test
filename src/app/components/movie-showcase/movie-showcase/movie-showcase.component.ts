import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-showcase',
  templateUrl: './movie-showcase.component.html',
  styleUrls: ['./movie-showcase.component.scss']
})
export class MovieShowcaseComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() movie: Movie;

  ngOnInit(): void {
  }

  navigateToMovie() {
    this.router.navigate([`/filme/${this.movie._id}`])
  }

}
