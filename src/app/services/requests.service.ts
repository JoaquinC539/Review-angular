import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}

