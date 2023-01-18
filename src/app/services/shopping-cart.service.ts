import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductData } from '../models/product-detail.model';

@Injectable()
export class ShoppingCartService {


  items:ProductData[] =[];
  constructor(private http: HttpClient) { }
  
  addToCart(product:ProductData){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items =[];
    return this.items;
  }
}