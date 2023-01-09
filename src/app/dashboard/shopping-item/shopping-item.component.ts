import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  dataList:any =[];
  tabIndex = 0;
  tabText ='';

  constructor(private httpClient:HttpClient) { }


  ngOnInit(): void {
    this.httpClient.get('/assets/shopdata.json').subscribe((data) =>{
      this.dataList = data;
      console.log(this.dataList);
    });
  }

}
