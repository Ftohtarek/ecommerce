import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductFormComponent } from 'admin/component/admin-product-form/admin-product-form.component';
import { AdminProductComponent } from 'admin/component/admin-product/admin-product.component';

import { AdminOrdersComponent } from './admin/component/admin-orders/admin-orders.component';
import { HomeComponent } from './core/component/home/home.component';
import { NotFoundComponent } from './core/component/not-found/not-found.component';
import { OrderSuccussComponent } from './core/component/order-succuss/order-succuss.component';
import { ProductComponent } from './core/component/product/product.component';
import { LoginComponent } from './memeber-ship/component/login/login.component';
import { SignupComponent } from './memeber-ship/component/signup/signup.component';
import { AdminAuthGuard } from './shared/service/admin-auth-guard.service';
import { AuthGaurd } from './shared/service/auth-gaurd.service';
import { CartComponent } from './shopping/component/cart/cart.component';
import { CheckOutComponent } from './shopping/component/check-out/check-out.component';
import { OrdersComponent } from './shopping/component/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'orders', component: OrdersComponent, canActivate: [AuthGaurd] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurd] },
  { path: 'order-success', component: OrderSuccussComponent, canActivate: [AuthGaurd] },

  { path: 'admin/products/add', component: AdminProductFormComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'admin/products', component: AdminProductComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'admin/products/:id', component: AdminProductFormComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGaurd, AdminAuthGuard] },

  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
