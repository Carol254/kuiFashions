import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductData } from '../models/product-detail.model';

@Injectable()
export class ShoppingCartService {

public cartItemList:ProductData[] =[];
public productList = new BehaviorSubject<any>([]);
  
  constructor(private http: HttpClient) { }
  
  getProducts(){
  return  this.productList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(){
    let grandTotal =0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if (product.id ===a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCrtItems(){
    this.cartItemList =[];
    this.productList.next(this.cartItemList);
  }


}