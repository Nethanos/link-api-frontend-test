import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies-home/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieShowcaseComponent } from '../../components/movie-showcase/movie-showcase/movie-showcase.component';
import { MovieViewComponent } from './movie-view/movie-view.component';



@NgModule({
  declarations: [MoviesComponent,
    MovieShowcaseComponent,
    MovieViewComponent ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
  ]
})
export class MoviesModule { }
