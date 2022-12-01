import { Component} from '@angular/core';
import { RequestService } from '../../services/requests.service';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/services/cookies.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[RequestService]
})
export class LoginComponent {
  private signindata={
    email:"",
    password:""
  }
  public email:string=""
  public password:string=""
  public error:string=""
  constructor(private _http:RequestService,private router:Router,private cookies:CookiesService) { }

  ngOnInit(): void {
  }
  signin(){
    this.signindata={email:this.email,password:this.password}
    this._http.Signin(this.signindata).subscribe(
    res=>{if(res.data.token!=-1){this.error="";this.email="";this.password="";
      this.cookies.setToken(res.data.token);
      console.log(res)
      this.router.navigateByUrl('/dash');
         }
      },
      err=>{this.error="",this.error=(err.error.error)}
    )
  }
  signup(){
    this.router.navigateByUrl("/signup")
  }

}
