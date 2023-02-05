import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { ActiveUser } from './models/active-user';
import { AuthService } from './service/auth.service';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, private user: UsersService) {
    /** 
     * @implements demonstrat user from realtime database using switchMap 
         that return with observable subscribe of @returns {onValueChange} 
      *
     */
    this.user.ActiveUser$ = this.auth.auth.authState.pipe(
      switchMap(authUser => this.user.get(<string>authUser?.uid)
      ))
    this.user.ActiveUser$.subscribe(user => {
      this.user.ActiveUser = <ActiveUser>user
    })


  }
  title = 'ecommerce';
}
