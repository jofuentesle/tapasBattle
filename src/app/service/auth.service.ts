import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { tap, map, catchError } from  'rxjs/operators';
import { Observable, of } from  'rxjs';

import { User } from '../models/user.model';
import { LoginForm } from '../interfices/login.interfices';
import { environment } from 'src/environments/environment';

const  base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable para los datos
  public userData$: Observable<User>

  constructor( private http: HttpClient, private router: Router) { }

  //Validar token
  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    console.log(token);

    return this.http.get(`${ base_url }/login/renew`, 
    {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (res:any) => {
        localStorage.setItem('token', token );
      }),
      map( res => true),
      catchError( error => of(false))
    );
  } 

  //Login user
 loginUser( formData: LoginForm ) {
    return this.http.post(`${ base_url }/login`,(formData))
                .pipe(
                  tap ( (res:any) => {
                    localStorage.setItem('token', res.token),
                    this.userData$ = res
                  })
                  )
                
 }

 logOut() {
  localStorage.removeItem('token');
  this.router.navigateByUrl('/login');
 }
}
