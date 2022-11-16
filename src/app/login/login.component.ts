import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[RequestService]
})
export class LoginComponent implements OnInit {
  public user:string="";
  public login:boolean;
  public activeusers:any;
  public password:string="";
  public error:boolean=false
  public errorcatched:string=""

  constructor(private _http:RequestService) {this.login=false;}
  ngOnInit(): void {

  }
  getLogin(user:string,password:string){
    this.error=false;
    this.user="";
    this.password="";
    this._http.getlogin(user,password).subscribe(
      response=>{
        this.login=true;
        this.activeusers=response;
        this.getUsers()
        return this.user=user;
      },
      (err)=>{this.error=true,this.errorcatched=(err.error.message)}
      ); }

  getUsers(){
      this._http.getUsers().subscribe(
        response=>{ this.activeusers=(response.users);}
        );
      }
      logOut(){
        return this.login=false
      }

}
