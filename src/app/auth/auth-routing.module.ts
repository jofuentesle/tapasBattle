import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryPwComponent } from './recovery-pw/recovery-pw.component';

const routes: Routes = [

        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'recover-password', component: RecoveryPwComponent }
        
]

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
  })
  
  
    export class AuthRoutingModule { }