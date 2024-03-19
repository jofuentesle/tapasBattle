import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { UserComponent } from './user/user.component';
import { VoteComponent } from './vote/vote.component';
import { AuthGuard } from '../guard/auth.guard';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { EventComponent } from './event/event.component';
import { NewEventComponent } from './new-event/new-event.component';
import { TapaDetailComponent } from './tapa/tapa-detail/tapa-detail.component';
import { NofoundComponent } from './nofound/nofound.component';

export const routes: Routes = [

    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [    
          { 
            path: '', 
            component: DashboardComponent },
            {
              path: 'recipes',
              component: TapaComponent
            },
            {
            path: 'recipes/:uid',
            component: TapaDetailComponent
          },
          {
            path: 'vote',
            component: VoteComponent
          },
          
          {
          path: 'user',
          component: UserComponent,
          children: [
              { path: '', 
                component: UserComponent 
              }
            ]
          },
          {
            path: 'user/account-settings',
            component: AccountSettingComponent
          },
          {
            path: 'event/:id',
            component: EventComponent,
            
          },
          {
            path: 'new-evnet',
            component: NewEventComponent
          },
          { path: '**', component:NofoundComponent },
          
        ]
    }
  ]
@NgModule({
    imports: [
      RouterModule.forChild( routes )
    ],
    exports: [
      RouterModule
    ]
  })
  export class PagesRoutingModule { }