import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatMaterialModule } from 'app/material.module';
import { SharedModule } from 'shared/shared.module';

import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrdersComponent } from './component/orders/orders.component';



@NgModule({
  declarations: [
    CartComponent,
    CheckOutComponent,
    OrdersComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    MatMaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],

  providers: []
})
export class ShoppingModule { }
