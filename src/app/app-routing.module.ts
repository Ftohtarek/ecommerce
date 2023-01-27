import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { OrderSuccussComponent } from './component/order-succuss/order-succuss.component';
import { ProductComponent } from './component/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccussComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my/orders', component: MyOrderComponent },
  { path: 'admin/products', component: AdminProductComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
