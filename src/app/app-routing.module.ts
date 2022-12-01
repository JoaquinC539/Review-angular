import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Components/Primer componente/First.component';
import { HooksComponent } from './Components/hooks/hooks.component';
import { SingersComponent } from './Components/singers/singers.component';
import { ThirdComponent } from './Components/third/third.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { SecondComponent } from './Components/second/second.component';
import { DashComponent } from './Components/dash/dash.component';
import { AccountComponent } from './Components/account/account.component';
import { DashGuard } from './dash.guard';

const routes:Routes=[

  {path:'Second',component:SecondComponent},
  {path:'First',component:FirstComponent},
  {path:'',component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Third",component:ThirdComponent},
  {path:"Contact",component:ContactComponent},
  {path:"login",component:LoginComponent},
  {path:"dash",component:DashComponent,canActivate:[DashGuard]},
  {path:"signup",component:AccountComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FirstComponent,HooksComponent,SecondComponent,SingersComponent,ThirdComponent,HomeComponent,ContactComponent,
  LoginComponent,DashComponent,AccountComponent];
export const appRoutingProviders:any[]=[];

