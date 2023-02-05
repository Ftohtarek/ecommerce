import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription, toArray } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {
  cartModel: CartModel = <CartModel>{}
  displayedColumns = ['productName', 'price', 'quantity', 'totalPrice']
  displayedFooters = ['productName', 'price', 'quantity', 'totalPrice']
  dataSource: MatTableDataSource<any> = <any>[]
  subscription?: Subscription;
  loading: boolean = true;
  @ViewChild('paginator') paginator?: MatPaginator
  constructor(public cartService: CartService) {
    this.subscription =
      cartService.getCartObject.subscribe(cart => {
        this.cartModel = cart
        this.dataSource = new MatTableDataSource(cart.items);
        this.dataSource.paginator = <MatPaginator>this.paginator
        this.loading = false;
      })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = <MatPaginator>this.paginator
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe
  }


}
