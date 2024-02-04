import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { NofoundComponent } from './pages/nofound/nofound.component';

const routes: Routes = [
  
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component:NofoundComponent },
    
  ];

  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forRoot( routes ),
      PagesRoutingModule,
      
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }
    