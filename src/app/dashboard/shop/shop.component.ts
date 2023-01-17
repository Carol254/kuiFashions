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
  productArr: {
    id:string;
    name:string;
    description:string;
    img:string;
    amount:string;
  }[] =[];


  products:any= [];
    
  
  shoppingInfo:any;
  

  menus:MenuData[] =[
    new MenuData('Ragged Jeans','Awesome ripped jeans size-10','/assets/ragged-jeans.jpg'),
    new MenuData('Black sweat top','Sweat top size-10','/assets/black sweat-top.jpg'),
    new MenuData('Black & White dress','Awesome dress size-8','/assets/black&white dress.jpg'),
    new MenuData('Denim Top','Awesome denim top size-10','/assets/denim top.jpg'),
    new MenuData('Grey Suit','grey suit size-10','/assets/grey suit.jpg'),
    new MenuData('Orange Top','Awesome Orange top size-9','/assets/orange top.jpg'),
    new MenuData('Polka Top','Awesome Polka top size-12','/assets/polka-dot top.jpg'),
    new MenuData('Pink Blazer','Awesome Pink Blazer size-9','/assets/pink blazer.jpg'),
    new MenuData('Pink Top','Awesome Pink top size-9','/assets/pink-top.jpg'),
    new MenuData('Orange Top','Awesome Orange top size-9','/assets/orange top.jpg'),
    new MenuData('Stripped Top','Awesome Stripped top size-9','/assets/stripped-top.jpg'),
    new MenuData('Beige Top','Awesome Beige top size-9','/assets/model_3.jpg'),
  ];

  constructor(private router:Router, private httpClient:HttpClient) { }

  ngOnInit(){
    this.httpClient.get("/assets/from_server/products.json").subscribe
    (data=>{
      console.log(data);
      this.products = data;
    }) 
   
  }
  onShoppingItem(){
        this.router.navigate(["dashboard/shop/shopping-item"]);
  }

}
