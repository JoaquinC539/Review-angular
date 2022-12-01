import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CookiesService {

  constructor(private cookies:CookieService) { }
  setToken(token:string){
    this.cookies.set("auth-token",token);
   }
   getToken(){
    return this.cookies.get("auth-token");
   }
   deleteCookie(){
    return this.cookies.delete('auth-token');
   }
   checkCookie(){
    return this.cookies.check("auth-token");
   }
}
