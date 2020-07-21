import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';
import {GenreOptionList} from '../../helpers/genre-option-list';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private profileService: ProfileService) { }


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


  saveUser(){
    this.profile = {...this.userForm.value};

    this.profileService.saveProfile(this.profile).subscribe((response) => {
      console.log("Perfil criado");
      this.router.navigate(['/filmes']);


    })

  }

}
