import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/models/menus.model';
import { ProductData } from 'src/app/models/product-detail.model';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit  {

  products:any= [];
  
  constructor(private router:Router, private httpClient:HttpClient,private cartService:CartService) { }

  ngOnInit(){
    // this.httpClient.get("/assets/from_server/products.json").subscribe
    // (data=>{
    //   console.log(data);
    //   this.products = data;
    // }) 

    this.cartService.getProductInfo().subscribe(data =>this.products =data);

   
  }
  onShoppingItem(){
        this.router.navigate(["dashboard/shop/shopping-item"]);
  }

}
