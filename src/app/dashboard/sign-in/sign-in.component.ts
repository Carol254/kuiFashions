import { ForgotPasswordComponent } from './../forgot-password/forgot-password.component';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  email:string ='';
  password:string ='';

  constructor(private router:Router,private auth:AuthService) { }


  ngOnInit(): void {
 
  }
 onSubmit(){

 }
 onNewUser(){
  this.router.navigate(['dashboard/home/sign-up']);
 }
 logIn(){
  if (this.email == ''){
    alert('Please enter email');
    return;
  }
  if (this.password == ''){
    alert('Please enter password');
    return;
  }
  this.auth.logIn(this.email,this.password);
  this.email ='';
  this.password ='';

 }
 forgotPassword(){
  this.router.navigate(['dashboard/forgot-password']);
 }

 

}
