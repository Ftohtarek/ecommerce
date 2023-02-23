import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from 'shared/service/auth-gaurd.service';
import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrdersComponent } from './component/orders/orders.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurd] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
