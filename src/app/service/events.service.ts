import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { tap, map, catchError } from  'rxjs/operators';
import { Observable, of } from  'rxjs';

import { Event } from '../models/events.model';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

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

        const {nombre, fecha, eventPlanerId, uid, img, chefs, guests, recipe } = res;
        
        const evento = new Event (nombre, fecha, eventPlanerId, uid, img, chefs, guests, recipe);
        
        localStorage.setItem('token', token );
      }),
      map( res => true),
      catchError( error => of(false))
    );
  }

  //crear evento
  createEvent( evento: any ): Observable<any> {

    const token = localStorage.getItem('token') || '';
    const url = `${ base_url }/events`;

    return this.http.post<any>(url, { evento },
    {
      headers: {
        'x-token': token
      }
    }) 
  }
  
  //obtener eventos
  getEvents(): Observable<any> {

    const token = localStorage.getItem('token') || '';

    return this.http.get<any>(`${ base_url }/events`,
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

  //obtener evento por id
  getEventById(uid:string): Observable<any> {

    const token = localStorage.getItem('token') || '';

    return this.http.get<any>(`${ base_url}/events/${ uid }`,
    
    {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (res:any) => {
          return res;
      })
    );
  }

updateEvent( event:any ): Observable<any> {
  
  const url = `${ base_url }/events/${ event.uid}`;
  const token = localStorage.getItem('token') || '';

  return this.http.put<Event>(url, { event },
    {
    headers: {
      'x-token': token
    }
  })
}

deleteEvent(): Observable<any> {

  const url = `${ base_url }/events`;
  const token = localStorage.getItem('token') || '';

  return this.http.delete<Event>(url,
    {
    headers: {
      'x-token': token
    }
  })
}

}
