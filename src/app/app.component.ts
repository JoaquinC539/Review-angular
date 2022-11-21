import { Component,OnInit } from '@angular/core';
import {configCSS} from './models/styleModels';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<First></First> <hooks></hooks> <singers></singers>`,
  styleUrls: ['./app.component.css','../assets/font-awesome-4.7.0/css/font-awesome.css']
})
export class AppComponent {

  public componentb:boolean=true;
  public config:any;
  public description:string;
  public screenwidth:any;
  public screenHeight:any

  constructor(){

    this.config=configCSS;
    this.description=this.config.description;
  }
  public hideComponent() {
    this.componentb=false;
  }


}


