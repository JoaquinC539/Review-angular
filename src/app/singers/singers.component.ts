import { Component, OnInit } from '@angular/core';
import { Singer } from '../models/singer';

@Component({
  selector: 'singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.css']
})
export class SingersComponent implements OnInit {
  public title:string="Cantantes";
  public singers:Array<Singer>=[];
  public binding:string;
  public newSingers:String[]=[];


  constructor() {
    this.binding=""
    this.singers=[
      new Singer('Rihana',15,'580M',800000),
      new Singer('Post Malone',9,'615M',1000000)
    ]
   }

  ngOnInit(): void {
  }

}
