import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';
import {GenreOptionList} from '../../helpers/genre-option-list';
import { LocalStorageMiddleware } from '../../middlewares/local-storage-middleware';
import { Movie } from '../../models/movie';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService, private localStorageMdw: LocalStorageMiddleware) { }


  profile: Profile;

  genreList = GenreOptionList;

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    age: new FormControl('', [Validators.required,  Validators.pattern("^[0-9]*$")]),
    favoriteMovie: new FormControl(''),
    favoriteGenre: new FormControl('')
  })


  saveUser(): void {
    this.profile = {...this.userForm.value};

    this.profile.favoriteMovieList = new Array<Movie>();

    this.localStorageMdw.setProfile(this.profile);

    this.router.navigate(['/movies']);

    }

    clearForm():void {
      this.userForm.reset();
    }

}
