import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private route: Router, private userService: UsersService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService.ActiveUser$.pipe(
      map(activeUser => {
        if (activeUser.isAdmin)
          return true
        this.route.navigate(['/*'])
        return false
      })
    )
  }
}

