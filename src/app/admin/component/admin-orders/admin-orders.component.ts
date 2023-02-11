import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from 'shared/service/orders.service';
import { UsersService } from 'shared/service/users.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent {
  orderList$: Observable<any>

  constructor(public user: UsersService, public order: OrdersService) {
    this.orderList$ = this.order.getAllOrders
  }
  
  deleteOrder = (event: string) =>
    this.order.deleteOrder(event)

}
