import { Component } from "@angular/core";

@Component({
  selector: 'First',
  templateUrl: './First.component.html',
  styleUrls:['../../assets/font-awesome-4.7.0/css/font-awesome.css','./First.css'],
})
export class FirstComponent {
    public title:string=""
    constructor(){
      this.title="Titulo desde el componente 'First'";

    }
  }




