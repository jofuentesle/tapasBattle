import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { tap, map, catchError } from  'rxjs/operators';
import { Observable, of } from  'rxjs';

import { Event } from '../models/events.model';
import { environment } from 'src/environments/environment';

const  base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor( private http: HttpClient, private router: Router) { }

   //Validar token
   validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    console.log(token);

    return this.http.get(`${ base_url }/events`, 
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
  
  //obtener eventos
  getEvents(): Observable<Event> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/events`,
    {
      headers: {
        'x-token': token
      }
    }) .pipe(
        tap ( (res:any) => {       
          return res;
        })
      )
  }
}
