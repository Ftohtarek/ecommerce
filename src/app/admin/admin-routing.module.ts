import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from 'shared/service/admin-auth-guard.service';
import { AuthGaurd } from 'shared/service/auth-gaurd.service';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminProductFormComponent } from './component/admin-product-form/admin-product-form.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';

const routes: Routes = [
  { path: 'products/add', component: AdminProductFormComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'products', component: AdminProductComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'products/:id', component: AdminProductFormComponent, canActivate: [AuthGaurd, AdminAuthGuard] },
  { path: 'orders', component: AdminOrdersComponent, canActivate: [AuthGaurd, AdminAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
