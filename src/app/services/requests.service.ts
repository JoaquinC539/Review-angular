import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService{
  public url:string;
  public fakeurl:string
  constructor(public _http:HttpClient){
    this.fakeurl="https://reqres.in/";
    this.url="https://review-backend.onrender.com/api"
    //this.url="http://localhost:3000/api"
  }
    getUser(user:number):Observable<any>{
      return this._http.get(this.fakeurl+"api/users/"+user);
    }
    sendContact(contactData:any):Observable<any>{
      return this._http.post(this.url+"/contact",contactData);
    }
    getUsers():Observable<any>{
      return this._http.get(this.url+"/users");
    }
    getWorking():Observable<any>{
      return this._http.get(this.url+"/work");
     }
     Register(regData:any):Observable<any>{
      return this._http.post(this.url+"/signup",regData)
     }
     Signin(signData:any):Observable<any>{
      return this._http.post(this.url+"/login",signData)
     }
     getDash(headers:any):Observable<any>{
      return this._http.get(this.url+"/dash",{headers});
     }
     gettickets(headers:any):Observable<any>{
      return this._http.get(this.url+"/tickets",{headers})
     }
     newTicket(headers:any,ticketbody:any):Observable<any>{
      return this._http.post(this.url+"/newticket",ticketbody,{headers})
     }
     changeStatus(headers:any,statuschange:any){
      return this._http.put(this.url+"/updateticket",statuschange,{headers})
     }
     deleteTicket(headers:any,id:any){
      return this._http.post(this.url+"/deleteticket",id,{headers})
     }
  }

