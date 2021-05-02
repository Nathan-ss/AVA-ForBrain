import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor( private router : Router ){

  }
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    const token = window.localStorage.getItem('token');
    if (token) {
      return true;
    }
    else{
      this.router.navigate(['login-page']);
      return false;
    }
  }
  
}
