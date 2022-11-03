import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents, appRoutingProviders  } from './app-routing.module';
import { SingersComponent } from './singers/singers.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { HighlightDirective} from './Directives/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SingersComponent,
    HighlightDirective,
    ContactComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
