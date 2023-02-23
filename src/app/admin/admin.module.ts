import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'shared/shared.module';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from './component/admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';


@NgModule({
  declarations: [
    AdminProductComponent,
    AdminProductFormComponent,
    AdminOrdersComponent,
  ],
  imports: [
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
