import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents,  } from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HighlightDirective} from './Directives/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookiesService } from './services/cookies.service';
import { RequestService } from './services/requests.service';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HighlightDirective,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [CookiesService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
