import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[RequestService]
})
export class LoginComponent implements OnInit {
  public user:any

  constructor(private _http:RequestService) { }

  ngOnInit(): void {
    this.getLogin("Manuel");
    console.log(this.user);

  }
  getLogin(user:string){
    this._http.getlogin(user).subscribe(
      response=>{this.user=response.users[0],console.log(response.users[0].user)}
    )
  }
}
