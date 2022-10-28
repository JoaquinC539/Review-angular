import { Component } from "@angular/core";
import {configCSS} from '../models/styleModels';

@Component({
  selector: 'First',
  templateUrl: './First.component.html',
  styleUrls:['../../assets/font-awesome-4.7.0/css/font-awesome.css','./First.css'],
})
export class FirstComponent {
    public title:string="";
    public config:any;
    public description:string="";
    public componentb:boolean=false;


    constructor(){
      this.config=configCSS;
      this.description=this.config.description;
      this.title="Titulo desde el componente 'First'";

    }
  }




