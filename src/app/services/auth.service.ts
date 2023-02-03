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
    this.fireauth.signInWithEmailAndPassword(email,password).then(res =>{
      localStorage.setItem('token','true');

      if (res.user?.emailVerified == true){
        this.router.navigate(['dashboard/shop/cart/checkout']);
      } else {
        this.router.navigate (['dashboard/verify-email']);
      }

    },err=>{
      alert(err.message);
      this.router.navigate(['dashboard/home/sign-in']);
    })
  }

  //register method
  register(email:string,passsword:string){
    this.fireauth.createUserWithEmailAndPassword(email,passsword).then(res =>{
      alert('Registration successfull');
      this.router.navigate(['dashboard/home/sign-in']);
      this.sendEmailForVerification(res.user);
    },err =>{
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

  //forgot password
  forgotPassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
    this.router.navigate (['dashboard/verify-email']);
    },err=>{
      alert('Something went wrong');
    })
  }

  sendEmailForVerification(user:any){
    user.sendEmailVerification().then((res:any)=>{
      this.router.navigate(['dashboard/verify-email']);
    },(err:any)=>{
      alert('Something went wrong,not able to register email');
    }
    )
  }

}
