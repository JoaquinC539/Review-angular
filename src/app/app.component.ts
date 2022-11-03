import { Component } from '@angular/core';
import { homedir } from 'os';
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


  constructor(){

    this.config=configCSS;
    this.description=this.config.description;



  }

  /**
   * hideComponent
   */
  public hideComponent() {
    this.componentb=false;
  }


}


