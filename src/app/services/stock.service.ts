import { Injectable } from "@angular/core";
import { Zapato } from '../models/zapatos';

@Injectable()
export class StockService{
  public zapatos:Zapato[];
  public formats:string[]=[];
  public stocks:string[]=[];
  public shoelaces:string[]=[];
  constructor(){
    this.zapatos=[
      new Zapato("Gucci",500,[24,26,28,22],true,true),
      new Zapato("Flexi",25,[24,26,28,22,20,18,16],true,true),
      new Zapato("Adidas",500,[24,26,28,22],true,false),
      new Zapato("LV",450,[24,26,28,22],false,false),
    ]
   }

   public getShoes():Zapato[]{
    this.formatter(this.zapatos);
    return this.zapatos;

   }

   public getStocks(){
    return this.stocks;
   }
   public getShoelace(){
    return this.shoelaces;
   }

   public formatter(shoes:Zapato[]){
    shoes.forEach(element=>{
      let value=element.stock;
      if(value===true){
        let format="si";
        this.stocks.push(format);
      }else{
        let format="no"
        this.stocks.push(format);
      }
    });
    shoes.forEach(element=>{
      let value=element.shoelace;
      if(value===true){
        let format="si";
        this.shoelaces.push(format);
      }else{
        let format="no"
        this.shoelaces.push(format);
      }
    });

}


}
