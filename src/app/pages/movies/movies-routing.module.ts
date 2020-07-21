import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies-home/movies.component';
import { MovieViewComponent } from './movie-view/movie-view.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
      path: 'filme/:id',
      component: MovieViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
