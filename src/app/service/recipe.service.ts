import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { tap, map, catchError } from  'rxjs/operators';
import { Observable, of } from  'rxjs';

import { Recipe } from '../models/recipe.model';
import { environment } from 'src/environments/environment';

const  base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})

export class RecipeService {

constructor( private http: HttpClient, private router: Router) { }

  //Validar token
  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    console.log(token);

    return this.http.get(`${ base_url }/recipes`, 
    {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (res:any) => {
        
        return res;

      }),
      map( res => true),
      catchError( error => of(false))
    );
  }

    //obtener recetas
    getRecipes(): Observable<any> {

        const token = localStorage.getItem('token') || '';
    
        return this.http.get<any>(`${ base_url }/recipes`,
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

    //obtener receta por id
    getRecipe(uid:string): Observable<any> {

        const token = localStorage.getItem('token') || '';
        
        return this.http.get<any>(`${ base_url}/recipes/${ uid }`,
        {
            headers: {
              'x-token': token
            }
          }).pipe(
              tap( (res:any) => {

                  const {id, nombre, tasteVote, presVote, originVote, img, uidChef } = res;
        
                  const receta = new Recipe (id, nombre, tasteVote, presVote, originVote, img, uidChef );
                return res;
              })
          );
    }
}