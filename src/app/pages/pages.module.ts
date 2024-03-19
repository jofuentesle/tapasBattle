import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';



import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { VoteComponent } from './vote/vote.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { EventComponent } from './event/event.component';
import { NewEventComponent } from './new-event/new-event.component';
import { TapaDetailComponent } from './tapa/tapa-detail/tapa-detail.component';





@NgModule({
  declarations: [
    DashboardComponent,
    TapaComponent,
    VoteComponent,
    AccountSettingComponent,
    EventComponent,
    NewEventComponent,
    TapaDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [ 
    DashboardComponent,
  ]
})
export class PagesModule { }
