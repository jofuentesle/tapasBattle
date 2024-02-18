import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

import { AuthModule } from './auth/auth.module'
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { PagesComponent } from './pages/pages.component';
import { AppComponent } from './app.component';



import { NofoundComponent } from './pages/nofound/nofound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NofoundComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    SharedModule,
    NgbModule
    
  ],
  providers: [],
  exports: [
    RouterModule,
    AppRoutingModule,
    RouterLink
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
