import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/requests.service';
import { CookiesService } from 'src/app/services/cookies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public regModel={
    name:"",
    email:"",
    password:""
  }
  public response:any;
  public email:string="";
  public password:string="";
  public name:string=""
  public error:any
  public success:any
  constructor(private http:RequestService,private cookies:CookiesService, private router:Router) { }

  ngOnInit(): void {

  }
  createAccount(){
    this.regModel={name:this.name,email:this.email,password:this.password}
    let register=this.http.Register(this.regModel).subscribe(
      res=>{this.error="";this.success=res.status;console.log(res); this.name="";this.email="";this.password="";
      setTimeout(()=>{this.signin(this.regModel)},3000)

    },
      err=>{console.log(err);
        this.error=""
        if(err.error.message){this.error=err.error.message;this.password=""}
        if(err.error.error){this.error=err.error.error;this.password=""}
      }
    );
  }
  signin(data:any){
    let signindata={email:data.email,password:data.password}
    this.http.Signin(signindata).subscribe(
    res=>{if(res.data.token!=-1){this.error="";this.email="";this.password="";
      this.cookies.setToken(res.data.token);
      console.log(res)
      this.router.navigateByUrl('/dash');
         }
      },
      err=>{this.error="",this.error=(err.error.error)}
    )
  }
}
