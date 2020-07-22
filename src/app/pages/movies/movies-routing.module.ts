import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ProfileGuardService } from '../../services/profile-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    canActivate: [ProfileGuardService]
  },
  {
      path: 'movie/:id',
      component: MovieViewComponent,
      canActivate: [ProfileGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
