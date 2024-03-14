import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app.routing.module';
import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { VoteComponent } from './vote/vote.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PerfilComponent } from './user/perfil/perfil.component';
import { EventComponent } from './event/event.component';
import { TapaDetailComponent } from './tapa/tapa-detail/tapa-detail.component';




@NgModule({
  declarations: [
    DashboardComponent,
    TapaComponent,
    VoteComponent,
    AccountSettingComponent,
    PerfilComponent,
    EventComponent,
    TapaDetailComponent
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
