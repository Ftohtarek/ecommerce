import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { ActiveUser } from 'shared/models/active-user';
import { AuthService } from 'shared/service/auth.service';
import { CartService } from 'shared/service/cart.service';
import { UsersService } from 'shared/service/users.service';

@Component({
  selector: 'e-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  toggleMenuIcon: boolean = false
  profileIsLoaded = false;

  isDataFetch: boolean = false;
  totalItemCount?: any;
  activeUser?: ActiveUser;

  constructor(public auth: AuthService, public user: UsersService, private cart: CartService) {
    cart.getCartObject.subscribe(cart => this.totalItemCount = cart.totalItemCount)
    this.user.ActiveUser$.subscribe(user => {
      this.activeUser = user
      this.isDataFetch = this.activeUser == null ? true : false
    })
  }


}
