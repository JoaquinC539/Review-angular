import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { RequestService } from '../services/requests.service';
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

  constructor(private _http:RequestService) {
    this.contact=new Contact("","","","",[""]);
  }
  ngOnInit(): void {
    $(function(){
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1000
      });
    });
  }
  Submit(formData:any){
    this._http.sendContact(this.contact).subscribe(
      response=>{
      return this.show=true;
        },
      error=>{console.log("error",error)}
    );
  }
}
