import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    favoriteMovie: new FormControl(''),
    favoriteGenre: new FormControl('')
  })


  saveUser(){
    this.router.navigate(['/filmes']);
  }

}
