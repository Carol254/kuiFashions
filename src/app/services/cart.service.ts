import { Injectable } from '@angular/core';
import { ProductData } from '../models/product-detail.model';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observer, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedProduct:ProductData =<ProductData>{
    id:          "",
    name:        "",
    description: "",
    img:         "",
    amount:      "",

    isSelected:false
  }

  
  userProductArr:ProductData[] =[];

  constructor(private http:HttpClient) { }

  getProductInfo(){
    return this.http.get('../../assets/from_server/products.json',{
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
}
