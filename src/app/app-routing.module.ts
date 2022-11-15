import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Primer componente/First.component';
import { HooksComponent } from './hooks/hooks.component';
import { SingersComponent } from './singers/singers.component';
import { ThirdComponent } from './third/third.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';





import { SecondComponent } from './second/second.component';

const routes:Routes=[

  {path:'Second',component:SecondComponent},
  {path:'First',component:FirstComponent},
  {path:'',component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Third",component:ThirdComponent},
  {path:"Contact",component:ContactComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FirstComponent,HooksComponent,SecondComponent,SingersComponent,ThirdComponent,HomeComponent,ContactComponent];
export const appRoutingProviders:any[]=[];

