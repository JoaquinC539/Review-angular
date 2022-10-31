import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public events:string="";
  public toPrint:string="";
  public prices: number[];
  public priceC0:number=0;
  public priceC1:number=0;
  public priceC2:number=0;
  public fruits:string[];

  public R:number=147;
  public G:number=158;
  public B:number=89;
  public color:string=""
  constructor() {
    this.prices=[15,18,8];
    this.fruits=["Manzana","Pera","Platano"];
    this.color=`rgb(${this.R},${this.G},${this.B})`
   }

  ngOnInit(): void {
  }

  keyUp(){
    this.toPrint=this.events;
    this.events="";
  }
  pricesChange0(){
    this.prices[0]=this.priceC0;
  }
  pricesChange1(){
    this.prices[1]=this.priceC1;
  }
  pricesChange2(){
    this.prices[2]=this.priceC2;
  }
  colorPick(){

    this.color=`rgb(${this.R},${this.G},${this.B})`
  }
}

