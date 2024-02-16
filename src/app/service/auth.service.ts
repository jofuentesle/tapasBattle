import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable para los datos
  public userData$: Observable<Login>

  constructor( private router: Router) { }

  //Login user
  onLogin = ({email, password }) => {

    console.log(email, password)

  }
}
