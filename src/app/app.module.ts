import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';


import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SharedComponent } from './shared/shared.component';

import { NofoundComponent } from './pages/nofound/nofound.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SharedComponent,
    
    NofoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  exports: [
    RouterModule,
    AppRoutingModule,
    RouterLink,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
