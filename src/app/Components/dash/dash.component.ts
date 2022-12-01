import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/requests.service';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { CookiesService } from 'src/app/services/cookies.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  private userInfo:any;
  public name:string="";
  private id:string=""
  private cookietoken:any
  private headers:any
  private navigate:any
  public serviceTickets:any[]=[]
  public work:string=""
  public status:boolean=false
  public comments:string=""
  public ticket: Ticket
  public ticketDone:boolean=false
  constructor(private router:Router,private http:RequestService,private cookies:CookiesService) {
    this.cookietoken=this.cookies.getToken();
    this.headers={"auth-token":this.cookietoken}
    this.ticket={work:this.work,status:this.status,comments:this.comments}
  }

  ngOnInit(): void {
    console.clear()
      this.http.getDash(this.headers).subscribe(
        res=>{
          this.userInfo=res;
          this.name=this.userInfo.data.user.name;
          this.id=this.userInfo.data.user.id;
        },
        err=>{console.log(err.error),this.logout()}
      )
      this.getServiceTickets()
  }
  logout(){
    this.cookies.deleteCookie();
    this.router.navigateByUrl("/login")
  }
  getServiceTickets(){
    this.http.gettickets(this.headers).subscribe(
      res=>{
        this.serviceTickets=res.results;
      },
      err=>{this.logout()}
    )
  }
  newTicket(){
    this.ticket={work:this.work,status:this.status,comments:this.comments}
    this.http.newTicket(this.headers,this.ticket).subscribe(
      res=>{if(res){this.getServiceTickets();alert("Ticket creado")}},
      err=>{this.logout()}
    )
  }
  changeStatus(id:string,status:boolean){
    let change
    if(status==true){status=false
    change={_id:id,status:status}
    }else if(status==false){status=true
      change={_id:id,status:status}
      }
    this.http.changeStatus(this.headers,change).subscribe(
      res=>{this.getServiceTickets()},
      err=>{console.log(err)}
    )
  }
  deleteTicket(id:string){
    let idformat={_id:id}
      this.http.deleteTicket(this.headers,idformat).subscribe(
        res=>{this.getServiceTickets()},
        err=>{console.log(err)}
      )
    this.getServiceTickets()
  }
}
