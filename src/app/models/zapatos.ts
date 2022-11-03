export class Zapato{
  constructor(
    public model:string,
    public price:number,
    public sizes:number[],
    public stock:boolean,
    public shoelace:boolean
  ){
  }
}
