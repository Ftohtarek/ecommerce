import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'shared/service/orders.service';
import { UsersService } from 'shared/service/users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],

})

export class OrdersComponent {
  orderList$: Observable<any>
  
  constructor(public user: UsersService, public order: OrdersService) {
    this.orderList$ = this.order.getUserOrder(<string>this.user.ActiveUser.uid)
  }
}