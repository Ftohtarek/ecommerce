import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Order } from '../models/orders';
import { CartService  } from './cart.service';
import { map } from 'rxjs'

;
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orderKey: string = ''

  constructor(private db: AngularFireDatabase, private cart: CartService) { }

  public get getAllOrders() {
    return this.db.list('orders').snapshotChanges().pipe(map(
      changes => changes.map(
        order => ({ key: order.key, ...<object>order.payload.val() }))))
  }

  public getUserOrder(clientId: string) {
    return this.db.list('orders', ref => ref.orderByChild('userId').equalTo(clientId)).valueChanges()
  }

  public async setOrder(data: Order) {
    return this.db.list('orders').push({ ...data })
  }

  deleteOrder(orderKey: string) {
    this.db.list('orders/' + orderKey).remove()
  }
}
