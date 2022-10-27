import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './Primer componente/First.component';

const routes:Routes=[
  {path:'',component:AppComponent},
  {path:'First',component:FirstComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
