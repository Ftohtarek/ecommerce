import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'memeber', loadChildren: () => import('./memeber-ship/memeber-ship.module')
      .then(m => m.MemeberShipModule)
  },
  {
    path: 'shopping', loadChildren: () => import('./shopping/shopping.module')
      .then(m => m.ShoppingModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
