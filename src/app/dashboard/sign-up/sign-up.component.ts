import { Router } from '@angular/router';
import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {

  
  email:string ='';
  password:string ='';

  constructor(private auth:AuthService,private router:Router) { 
 
  }

  ngOnInit(): void {
   
  }

  onSubmit(){
    console.log();
  }

  logIn(){
      this.router.navigate(['dashboard/home/sign-in']);
   }

  register(){
      if (this.email == ''){
        alert('Please enter email');
        return;
      }
      if (this.password == ''){
        alert('Please enter password');
        return;
      }
      this.auth.register(this.email,this.password);
      this.email ='';
      this.password ='';
    
    }
  }
