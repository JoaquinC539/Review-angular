import { Component, OnInit ,DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit,DoCheck,OnDestroy {
  public user1:string="";
  public user2:string;

  public show:boolean=true;
  constructor() {
    this.user1="Pedro";
    this.user2="Marina"
  }

//Methods
  ngOnInit(): void {

  }

  ngDoCheck(){


  }
  public cambiarUsuario(){
    this.user1="Rodrigo";
    this.user2="Pamela";
  }
   ngOnDestroy(){


  }
  public destroy(){
    this.show=false;
  }

}
