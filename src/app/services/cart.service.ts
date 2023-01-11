import { Injectable } from '@angular/core';
import { ProductData } from '../models/product-detail.model';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedProduct:ProductData =<ProductData>{
    id: "",
    Name: "",
    Description: "",
    img:"",
    Amount:"",
  }

  constructor(private http:HttpClient) { }

  getProductInfo(){
    return this.http.get('../../assets/shopdata.json',{
      headers:new HttpHeaders({
        'accept':'application/json',
        'Content-Type':'application/json'
      }),
    }
    ).pipe(
      tap
      ({
        next:(resp: any)=>{
            console.log(resp);
        },
        error:()=>{

        }
      })
    );
  }
}
