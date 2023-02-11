import { Component } from '@angular/core';
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

  cartModel$ = this.cart.getCartObject

  constructor(public auth: AuthService, public user: UsersService, private cart: CartService) {

  }


}
