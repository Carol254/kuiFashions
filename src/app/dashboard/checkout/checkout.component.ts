import { ProductData } from './../../models/product-detail.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  productList:ProductData[]=[];
  
  counties =[
            "Mombasa",
            "Kwale",
            "Kilifi",
            "Tana River",
            "Lamu",
            "Taita Taveta",
           " Garissa",
           " Wajir",
          "  Mandera",
           " Marsabit",
           " Isiolo",
          "  Meru",
           " Tharaka-Nithi",
           " Embu",
           " Kitui",
           " Machakos",
           " Makueni",
           " Nyandarua",
            "Nyeri",
            "Kirinyaga",
            "Murang’a",
            "Kiambu",
            "Turkana",
           " West Pokot",
           " Samburu",
           " Trans-Nzoia",
           " Uasin Gishu",
            "Elgeyo-Marakwet",
           " Nandi",
            "Baringo",
          "Laikipia",
            "Nakuru",
            "Narok",
            "Kajiado",
            "Kericho",
            "Bomet",
            "Kakamega",
            "Vihiga",
            "Bungoma",
            "Busia",
            "Siaya",
            "Kisumu",
           " Homa Bay",
           " Migori",
            "Kisii",
            "Nyamira",
            "Nairobi"
  ]

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(resp=>{
      this.productList = resp;
    });
  }
  

}
