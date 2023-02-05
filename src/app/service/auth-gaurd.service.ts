import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from '@firebase/util';
import { map } from 'rxjs';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {

  constructor(private auth: AuthService, private route: Router, private user: UsersService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.user.ActiveUser$.pipe(
      map(activeUser => {
        if (activeUser)
          return true
        this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } })
        return false
      })
    )
  }
}
