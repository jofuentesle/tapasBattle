import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, RouterLink } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

import { AuthModule } from './auth/auth.module'
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { PagesComponent } from './pages/pages.component';
import { AppComponent } from './app.component';
import { NofoundComponent } from './pages/nofound/nofound.component';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';

import { MomentDateAdapter } from '@angular/material-moment-adapter';


export const DateFormats = {
  parse: {
      dateInput: ['YYYY-MM-DD']
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    AppComponent,
    NofoundComponent,
    PagesComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    SharedModule,
    BrowserAnimationsModule,
    MatNativeDateModule
    
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DateFormats }
  ],
  exports: [
    RouterModule,
    AppRoutingModule,
    RouterLink
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
