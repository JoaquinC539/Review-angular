import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Primer componente/First.component';
import { HooksComponent } from './hooks/hooks.component';
import { SingersComponent } from './singers/singers.component';



import { SecondComponent } from './second/second.component';

const routes:Routes=[

  {path:'Second',component:SecondComponent},
  {path:'First',component:FirstComponent},
  {path:'',component:FirstComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FirstComponent,HooksComponent,SecondComponent,SingersComponent];
export const appRoutingProviders:any[]=[];

