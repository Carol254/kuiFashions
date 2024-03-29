import { Injectable } from '@angular/core';
import { ProductData } from '../models/product-detail.model';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observer, tap, BehaviorSubject,Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
items:ProductData[]=[];
public productList = new BehaviorSubject<any>([]);
public search = new BehaviorSubject<string>("");

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
  getProducts(){
    return  this.productList.asObservable();
    }

  setProduct(product:any){
    this.items.push(...product);
    this.productList.next(product);
  }

  addtoCart(product:any){
    this.items.push(product);
    this.productList.next(this.items);
    console.log(this.items);
  }



  removeCartItem(product:any){
    this.items.map((a:any,index:any)=>{
      if (product.id ===a.id){
        this.items.splice(index,1);
      }
    })
    this.productList.next(this.items);
  }

  removeAllCartItems(){
    this.items =[];
    this.productList.next(this.items);
  }


}
