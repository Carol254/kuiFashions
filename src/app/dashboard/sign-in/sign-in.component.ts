import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  genders = ['male', 'female'];
  

  constructor() { }

   signinForm = new FormGroup({
    'username': new FormControl(null,Validators.required),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'gender':new FormControl('female')
  });
  ngOnInit(): void {
 
  }
 onSubmit(){
  console.log(this.signinForm);
 }
}
