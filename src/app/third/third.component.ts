import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapatos';
import { StockService } from '../services/stock.service';
import { RequestService } from '../services/requests.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'Third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  providers:[StockService,RequestService]
})
export class ThirdComponent implements OnInit {
  public shoes:Zapato[]=[];
  public stocks:any[]=[];
  public shoelaces:any[]=[];
  public usernumber:number=1
  public user:any;
  public date:any

  constructor(
    private _stockService:StockService,
    private _http:RequestService
  ) {
    this.date=Date();
  }

  ngOnInit(): void {
    this.shoes=this._stockService.getShoes();
    this.stocks=this._stockService.getStocks();
    this.shoelaces=this._stockService.getShoelace();
    this.getUser(1);


  }
  getUser(usernumber:number){
    let request=this._http.getUser(usernumber).subscribe(
      response=>{ this.user=response.data,console.log(response.data)},
      error=>{console.log(error)}
    );
  }



}

