import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { Login } from '../models/login.model';
import { LoginForm } from '../interfices/login.interfices';
import { environment } from 'src/environments/environment';

const  base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable para los datos
  public userData$: Observable<Login>
  AUTH_SERVER = "http://localhost:3000";
  authSubject  =  new  BehaviorSubject(false);

  constructor( private http: HttpClient, private router: Router) { }

  //Login user
 loginUser( formData: LoginForm ) {
    return this.http.post(`${ base_url }/login`,(formData))
 }
}
