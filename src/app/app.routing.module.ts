import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule} from './auth/auth-routing.module';

import { NofoundComponent } from './pages/nofound/nofound.component';

const routes: Routes = [
  
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component:NofoundComponent },
    
  ];

  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot( routes ),
      AuthRoutingModule,
      PagesRoutingModule,
      

      
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
    