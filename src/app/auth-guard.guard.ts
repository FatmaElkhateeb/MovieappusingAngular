import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  isloggedIn:boolean=false;
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.isloggedIn){
      return true;}
      window.alert("You don't have permission to view this page");
      return this.router.navigate(['']);
    };
  }
  

