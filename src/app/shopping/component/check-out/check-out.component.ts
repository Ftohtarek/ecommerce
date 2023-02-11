import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartModel } from 'shared/models/cart.model';
import { Countries } from 'shared/models/countries';
import { Destination } from 'shared/models/destination';
import { Order } from 'shared/models/orders';
import { CartService } from 'shared/service/cart.service';
import { OrdersService } from 'shared/service/orders.service';
import { UsersService } from 'shared/service/users.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnDestroy, OnInit {
  cart: CartModel = <CartModel>{};
  subscription?: Subscription;
  shippingForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'address': new FormControl('', [Validators.required]),
    'country': new FormControl('', [Validators.required]),
    'city': new FormControl('', [Validators.required])
  })

  constructor(private cartService: CartService,
    public countries: Countries,
    private _snackBar: MatSnackBar,
    private router: Router,
    private orders: OrdersService,
    private user: UsersService
  ) { }
  ngOnInit(): void {
    this.subscription = this.cartService.getCartObject.subscribe(cart => this.cart = cart)
  }
  succuss() {
    this._snackBar.open('order in process thanks for time ', 'done', { duration: 5 * 1000 });
    this.orders.setOrder(this.orderValue)
    this.router.navigate(['orders'])
  }

  get orderValue() {
    return new Order(<string>this.user.ActiveUser.uid, <Destination>this.shippingForm.value, this.cart)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}

