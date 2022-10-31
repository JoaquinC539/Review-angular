import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents, appRoutingProviders  } from './app-routing.module';
import { SingersComponent } from './singers/singers.component';


import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SingersComponent,




  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
