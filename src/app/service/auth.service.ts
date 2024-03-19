import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { tap, map, catchError } from  'rxjs/operators';
import { Observable, of } from  'rxjs';

import { User } from '../models/user.model';
import { LoginForm } from '../interfices/login.interfices';
import { AccountForm } from '../interfices/account.interface';
import { environment } from 'src/environments/environment';

const  base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variable para los datos
  public userData$: User;

  constructor( private http: HttpClient, private router: Router) { }

  //Obtenemos token
  get token ():string {
    return localStorage.getItem('token') || '';
  }

  //Obtenemos uid
  get uid ():string {
    return this.userData$.uid || '';
  }

  //Validar token
  validarToken(): Observable<boolean> {

    return this.http.get(`${ base_url }/login/renew`, 
    {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      tap( (res:any) => {
  
        //recuperamos datos usuario logeado
        const {nombre, email, role, chefGuest,img, uid  } = res.usuarioDB;
        this.userData$ = new User(nombre, email,'', chefGuest,img, role, uid);
        localStorage.setItem('token', this.token );
        
      }),
      map( res => true),
      catchError( error => of(false))
    );
  } 

  //Actualizar usuario
  updateAccount( formData: AccountForm  ) {

    return this.http.put(`${ base_url }/usuarios/${this.uid}`, ({nombre:formData.nombre, email:formData.email })
               ,{
                headers: {
                'x-token': this.token
                }}); 
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

  //Obtener todos los usuarios
  getAllUser() {

    //return this.http.get(`${base_url}/usuarios`);

 }

  logOut() {
  localStorage.removeItem('token');
  this.router.navigateByUrl('/login');
}
}
