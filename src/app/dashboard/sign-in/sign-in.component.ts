import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  genders = ['male', 'female'];
  

  constructor() { }

   signinForm = new FormGroup({
    'username': new FormControl(null),
    'email': new FormControl(null),
    'gender':new FormControl('female')
  });
  ngOnInit(): void {
 
  }
 
}
