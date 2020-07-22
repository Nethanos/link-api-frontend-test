import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { FormsModule } from '@angular/forms';
import { MovieShowcaseComponent } from '../../components/movie-showcase/movie-showcase.component';
import { SharedModule } from '../../shared/shared-module';
import { MovieListComponent } from './movie-list/movie-list.component';



@NgModule({
  declarations: [MovieListComponent,
    MovieShowcaseComponent,
    MovieViewComponent ],
  imports: [
    MoviesRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class MoviesModule { }
