import { Component } from '@angular/core';
import {
  AngularFireDatabase,
} from '@angular/fire/compat/database';
import { CartModel } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';
import { UsersService } from 'src/app/service/users.service';

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
