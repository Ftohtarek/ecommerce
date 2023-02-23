import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrdersComponent } from './component/orders/orders.component';

import { ShoppingRoutingModule } from './shopping-routing.module';


@NgModule({
  
  declarations: [
    CartComponent,
    CheckOutComponent,
    OrdersComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    ShoppingRoutingModule,
  ]
})
export class ShoppingModule { }

