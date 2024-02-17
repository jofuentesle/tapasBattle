import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { tap } from  'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  private auth:AuthService,
                private router:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this.auth.validarToken()
      .pipe(
        tap( estaAuth => {
          if ( !estaAuth ) {
            this.router.navigateByUrl('/login')
          }
        })
      )

  }
  
}
