import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable()
export class RequestService{
  public url:string;
  constructor(public _http:HttpClient){
    this.url="https://reqres.in/";
  }
    getUser(user:number):Observable<any>{
      return this._http.get(this.url+"api/users/"+user);
    }

    sendContact(contactData:any):Observable<any>{
      this.url="http://localhost:3000/api/contact"
      return this._http.post(this.url,contactData);
    }
    getlogin(user:string,password:string):Observable<any>{
      this.url="http://localhost:3000/api/login/"
      return this._http.get(this.url+user+"/"+password);
    }
    getUsers():Observable<any>{
      this.url="http://localhost:3000/api/users"
      return this._http.get(this.url);
    }

  }

