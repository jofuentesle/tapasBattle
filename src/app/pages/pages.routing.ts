import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';
import { UserComponent } from './user/user.component';
import { VoteComponent } from './vote/vote.component';

export const routes: Routes = [

    { 
        path: 'dashboard', 
        component: PagesComponent,
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
          }
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