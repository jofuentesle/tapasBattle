import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { VoteComponent } from './vote/vote.component';




@NgModule({
  declarations: [
    DashboardComponent,
    TapaComponent,
    VoteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [ 
    DashboardComponent,

  ]
})
export class PagesModule { }
