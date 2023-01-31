import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }
  //login Method
  logIn(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['dashboard/shop/cart/checkout']);
    },err=>{
      alert(err.message);
      this.router.navigate(['dashboard/home/sign-in']);
    })
  }
//register method
  signUp(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert('Registration successfull');
    this.router.navigate(['dashboard/home/sign-in']);

    },
    err=>{
      alert(err.message);
      this.router.navigate(['dashboard/home/sign-up']);
    })
  }

  //logOut

  logOut(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['dashboard/home/sign-in']);
    },err=>{
      alert(err.message);
    })
  }
}
