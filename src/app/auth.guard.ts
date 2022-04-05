import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service : InteractionService,
              private router : Router)
  {
    
  }

  canActivate(){
    if(this.service.isAuthenticate()){
      return true
    }
  }  
}
