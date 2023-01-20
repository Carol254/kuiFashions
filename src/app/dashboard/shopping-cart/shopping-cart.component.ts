import { ProductData } from 'src/app/models/product-detail.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productList:ProductData[]=[];
  grandTotal:number = 0;

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(resp=>{
      this.productList = resp;
    });
  }

  removeItem(item:any){
    this.productService.removeCartItem(item);
  }

  emptyCart(){
    this.productService.removeAllCartItems();
  }

  onShop(){
    this.router.navigate(['dashboard/shop']);
  }

  calcGrandTotal():number{
    let total:number = 0;
    for (let product of this.productList){
      total += (product.quantity * product.amount);
    }
    return total;
  }
  onCheckOut(){
    
  }
}
