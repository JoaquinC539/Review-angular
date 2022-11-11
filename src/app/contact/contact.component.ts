import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { RequestService } from '../services/requests.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [RequestService]
})
export class ContactComponent implements OnInit {
  public contact:Contact

  constructor(private _http:RequestService) {
    this.contact=new Contact("","","","",[""]);

  }

  ngOnInit(): void {

  }
  Submit(formData:any){
    this._http.sendContact(this.contact).subscribe(
      response=>{console.log("respuesta: ",response,this.contact)},
      error=>{console.log("error",error)}
    );


  }


}
