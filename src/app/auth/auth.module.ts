import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
//compomentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryPwComponent } from './recovery-pw/recovery-pw.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    RecoveryPwComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: []
})
export class AuthModule { }
