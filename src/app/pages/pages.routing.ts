import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { UserComponent } from './user/user.component';
import { VoteComponent } from './vote/vote.component';
import { AuthGuard } from '../guard/auth.guard';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EventComponent } from './event/event.component';

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
            path: 'tapa',
            component: TapaComponent
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
            path: 'account-settings',
            component: AccountSettingComponent
          },
          {
            path: 'perfil',
            component: PerfilComponent
          },
          {
            path: 'event/:id',
            component: EventComponent
          },
          
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