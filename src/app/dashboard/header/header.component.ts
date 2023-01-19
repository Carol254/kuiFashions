import { ProductService } from './../../services/product.service';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItems:number = 0;

  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.totalItems = res.length;
    })
  }
  onSignIn(){
    this.router.navigate(['dashboard/home/sign-in']);
  }
  onSignUp(){
    this.router.navigate(['dashboard/home/sign-up']);
  }
 

}
