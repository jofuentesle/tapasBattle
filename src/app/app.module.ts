import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { AppComponent } from './app.component';



import { NofoundComponent } from './pages/nofound/nofound.component';



@NgModule({
  declarations: [
    AppComponent,
    NofoundComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    
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
