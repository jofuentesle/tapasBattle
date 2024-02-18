import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing.module';
import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { VoteComponent } from './vote/vote.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EventComponent } from './event/event.component';




@NgModule({
  declarations: [
    DashboardComponent,
    TapaComponent,
    VoteComponent,
    AccountSettingComponent,
    PerfilComponent,
    EventComponent
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
