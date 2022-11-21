import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable()
export class RequestService{
  public url:string;
  public fakeurl:string
  constructor(public _http:HttpClient){
    this.fakeurl="https://reqres.in/";
    this.url="https://review-backend.onrender.com/api"
  }
    getUser(user:number):Observable<any>{
      return this._http.get(this.fakeurl+"api/users/"+user);
    }
    sendContact(contactData:any):Observable<any>{
      return this._http.post(this.url+"/contact",contactData);
    }
    login(LoginData:any):Observable<any>{
      return this._http.post(this.url+"/login",LoginData);
    }
    getUsers():Observable<any>{
      return this._http.get(this.url+"/users");
    }

  }

