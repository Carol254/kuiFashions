import { Component, OnInit } from '@angular/core';
import { MenuData } from 'src/app/models/menus.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  menus:MenuData[] =[
    new MenuData('Ragged Jeans','Awesome ripped jeans size-10','/assets/ragged-jeans.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
