import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSignIn(){
    this.router.navigate(['dashboard/home/sign-in']);
  }
  onSignUp(){
    this.router.navigate(['dashboard/home/sign-up']);
  }

}
