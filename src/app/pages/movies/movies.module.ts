import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies-home/movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { FormsModule } from '@angular/forms';
import { MovieShowcaseComponent } from '../../components/movie-showcase/movie-showcase.component';



@NgModule({
  declarations: [MoviesComponent,
    MovieShowcaseComponent,
    MovieViewComponent ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class MoviesModule { }
