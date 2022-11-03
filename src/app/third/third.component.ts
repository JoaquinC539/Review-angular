import { Component, OnInit } from '@angular/core';
import { Zapato } from '../models/zapatos';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  providers:[StockService]
})
export class ThirdComponent implements OnInit {
  public shoes:Zapato[]=[];
  public stocks:any[]=[];
  public shoelaces:any[]=[];


  constructor(
    private _stockService:StockService
  ) { }

  ngOnInit(): void {
    this.shoes=this._stockService.getShoes();
    this.stocks=this._stockService.getStocks();
    this.shoelaces=this._stockService.getShoelace();

  }
}

