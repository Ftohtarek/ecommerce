import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ManageOrdersComponent } from './component/orders/manage-orders/manage-orders.component';
import { ManageProductComponent } from './component/orders/manage-product/manage-product.component';
import { MyOrdersComponent } from './component/orders/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: MyOrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders/manage', component: ManageOrdersComponent },
  { path: 'orders/products/manage', component: ManageProductComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
