import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HttpClientModule,
     
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
