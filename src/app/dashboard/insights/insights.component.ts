import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

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
