import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { OrdersService } from 'shared/service/orders.service';
import { UsersService } from 'shared/service/users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],

})

export class OrdersComponent implements OnDestroy {
  orderList$: Observable<any> = of(false)
  subscription: Subscription;
  constructor(public user: UsersService, public order: OrdersService) {
    this.subscription = user.ActiveUser$.subscribe(user => this.orderList$ = this.order.getUserOrder(<string>user?.uid))
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

}