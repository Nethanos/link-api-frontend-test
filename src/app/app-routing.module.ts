import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileGuardService } from './services/profile-guard.service';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "movies", loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule),
    canLoad: [ProfileGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
