import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { VoteComponent } from './vote/vote.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    TapaComponent,
    VoteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ 
    PagesComponent,
    DashboardComponent,

  ]
})
export class PagesModule { }
