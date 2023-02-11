import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CartModel } from 'shared/models/cart.model';
import { CartService } from 'shared/service/cart.service';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmPopupComponent } from 'shared/component/confirm-popup/confirm-popup.component';

export interface DialogData {
  animal: string;
  name: string;
}

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
  darkMode: boolean = false
  @ViewChild('paginator') paginator?: MatPaginator
  constructor(public cartService: CartService, public dialog: Dialog) {
    this.subscription =
      cartService.getCartObject.subscribe(cart => {
        this.cartModel = cart
        this.dataSource = new MatTableDataSource(cart.items);
        this.dataSource.paginator = <MatPaginator>this.paginator
        this.loading = false;
      })
  }

  openDialog(element: string) {
    const dialogRef = this.dialog.open(ConfirmPopupComponent,
      {
        width: '250px',
        data: { deletedElement: element }
      })
    dialogRef.closed.subscribe(confirm => confirm ? this.cartService.removeCartItems() : null)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = <MatPaginator>this.paginator
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe
    this.dialog.ngOnDestroy()

  }


}
