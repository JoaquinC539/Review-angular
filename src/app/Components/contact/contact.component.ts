import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { RequestService } from '../../services/requests.service';
declare var $:any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [RequestService]
})
export class ContactComponent implements OnInit {
  public contact:Contact;
  public show:boolean=false;
  public error:string=""

  constructor(private _http:RequestService) {
    this.contact=new Contact("","","","","");
  }
  ngOnInit(): void {
    $(function(){
      $('.slider').bxSlider({
        //mode:"fade",
        auto:true,
        captions:true,
        slideWidth:600,
        stopAutoOnClick:true,
        slideHeight:500
      });
    });
  }
  Submit(formData:any){
    this.error=""
    this._http.sendContact(this.contact).subscribe(
      response=>{
      return this.show=true;
        },
      error=>{this.error=error.error.error}
    );
  }
}
