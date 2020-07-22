import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesModule } from './pages/movies/movies.module';
import { HttpClientModule } from '@angular/common/http';
import { LinkapiLogoComponent } from './components/linkapi-logo/linkapi-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LinkapiLogoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MoviesModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
