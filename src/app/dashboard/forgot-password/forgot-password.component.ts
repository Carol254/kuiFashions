import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  email:string ='';
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  forgotPassword(){
    this.auth.forgotPassword(this.email);
    this.email ='';
  }
}
