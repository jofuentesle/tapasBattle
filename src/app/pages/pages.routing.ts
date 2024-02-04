import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TapaComponent } from './tapa/tapa.component';

export const routes: Routes = [

    { 
        path: 'dashboard', 
        component: PagesComponent,
        children: [
    
          { path: '', component: DashboardComponent },
          {
            path: 'tapa',
            component: TapaComponent
          },
          {
            path: 'vote',
            component: TapaComponent
          },
      
        ]
      },
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