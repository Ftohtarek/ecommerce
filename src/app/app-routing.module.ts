import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from './admin/admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { OrderSuccussComponent } from './component/order-succuss/order-succuss.component';
import { ProductComponent } from './component/product/product.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminAuthGuard } from './service/admin-auth-guard.service';
import { AuthGaurd } from './service/auth-gaurd.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGaurd] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGaurd] },
  { path: 'order-success', component: OrderSuccussComponent, canActivate: [AuthGaurd] },

  { path: 'admin/products/add/:id', component: AdminProductFormComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'admin/products/add', component: AdminProductFormComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'admin/products', component: AdminProductComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGaurd, AdminAuthGuard] },

  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
