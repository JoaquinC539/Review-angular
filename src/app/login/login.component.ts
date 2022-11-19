import { Component} from '@angular/core';
import { RequestService } from '../services/requests.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[RequestService]
})
export class LoginComponent {
  public user:string="";
  public login:boolean;
  public activeusers:any;
  public password:string="";
  public error:boolean=false
  public errorcatched:any
  private logdata:Login

  constructor(private _http:RequestService) {this.login=false;
  this.logdata=new Login("","");
  }
  getLogin(){
    this.logdata=new Login(this.user,this.password);
    this.password=""
    this._http.login(this.logdata).subscribe(
      response=>{
        if(response.status=true){
          this.login=true;
          this.activeusers=response;
          this.getUsers()
        }else{this.error=true}
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
