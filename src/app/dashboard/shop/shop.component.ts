import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/models/menus.model';
import { ProductData} from 'src/app/models/product-detail.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit  {

  products:ProductData[]= [];
  
  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(){

    this.productService.getProductInfo().subscribe(data =>{
      this.products = data;
    
      this.products.forEach((a:ProductData)=>{
        Object.assign(a,{quantity:1,total:a.amount});
      });
    })
  }
  onShoppingItem(){
        this.router.navigate(["dashboard/shop/shopping-item"]);
  }

  addtoCart(product:any){
    this.productService.addtoCart(product);
  }

 

}
