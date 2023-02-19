import { Component } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { ActiveUser } from './shared/models/active-user';
import { AuthService } from './shared/service/auth.service';
import { UsersService } from './shared/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, private user: UsersService) {
    /** 
     * @implements delegate user from realtime database using switchMap 
         that return with observable subscribe of @returns {onValueChange} 
      *
     */
    this.user.ActiveUser$ = this.auth.auth.authState.pipe(
      switchMap(authUser => this.user.getUser(<string>authUser?.uid)
      ))
    this.user.ActiveUser$.subscribe(user =>  this.user.ActiveUser = <ActiveUser>user )


  }
  title = 'ecommerce';
}
