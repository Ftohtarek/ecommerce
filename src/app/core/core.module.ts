import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from 'shared/shared.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
