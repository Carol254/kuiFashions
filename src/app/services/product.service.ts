import { Injectable } from '@angular/core';
import { ProductData } from '../models/product-detail.model';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observer, tap, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
items:ProductData[]=[];

  constructor(private http:HttpClient) { }

  getProductInfo():Observable<ProductData[]>{
    return this.http.get<ProductData[]>('../../assets/from_server/products.json',{
      headers:new HttpHeaders({
        'accept':'application/json',
        'Content-Type':'application/json'
      }),
    }
    ).pipe(
      tap
      ({
        next:(resp: any)=>{
          console.log('from service' + resp);
        
        },
        error:()=>{

        }
      })
    );
  }

  addToCart(product:ProductData){
    this.items.push(product);
  }


}
