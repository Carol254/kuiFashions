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
    this.getTotalPrice();
    console.log(this.items);
  }

  getTotalPrice():number{
    let grandTotal =0;
    this.items.map((a:any)=>{
      grandTotal +=a.total;
    });
  return grandTotal;
  }

  removeCartItem(product:any){
    this.items.map((a:any,index:any)=>{
      if (product.id ===a.id){
        this.items.splice(index,1);
      }
    })
  }

  removeAllCartItems(){
    this.items =[];
    this.productList.next(this.items);
  }


}
