import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { AdminProductFormComponent } from './component/admin-product-form/admin-product-form.component';
import { MatMaterialModule } from 'app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    AdminProductComponent,
    AdminProductFormComponent,
    AdminOrdersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers:[]
})
export class AdminModule { }