import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookiesService } from './services/cookies.service';
import { Router } from '@angular/router';
import { RequestService } from './services/requests.service';

@Injectable({
  providedIn: 'root'
})
export class DashGuard implements CanActivate {
  constructor(private cookies:CookiesService ,private router:Router,private http:RequestService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie=this.cookies.checkCookie();
      if(!cookie){this.router.navigateByUrl("/login")}
    return true;
  }

}
