import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'app/app-routing.module';
import { MatMaterialModule } from 'app/material.module';
import { CustomFormsModule } from 'ng2-validation';

import { AutoCompleteFieldComponent } from './component/auto-complete-field/auto-complete-field.component';
import { CardPlaceholder } from './component/card/card-placeholder.component';
import { CardComponent } from './component/card/card.component';
import { ConfirmPopupComponent } from './component/confirm-popup/confirm-popup.component';
import { OrderTableComponent } from './component/order-table/order-table.component';
import { QuantityComponent } from './component/quantity/quantity.component';
import { Countries } from './models/countries';
import { AuthGaurd } from './service/auth-gaurd.service';
import { AuthService } from './service/auth.service';
import { CartService } from './service/cart.service';
import { ProductService } from './service/product.service';
import { SkeletonMockData } from './service/skeleton.data';
import { UsersService } from './service/users.service';




@NgModule({
  declarations: [
    AutoCompleteFieldComponent,
    OrderTableComponent,
    QuantityComponent,
    CardComponent,
    CardPlaceholder,
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule,
    MatMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  exports: [
    AutoCompleteFieldComponent,
    OrderTableComponent,
    QuantityComponent,
    CardComponent,
    CardPlaceholder,
    ConfirmPopupComponent,
    // 
    MatMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomFormsModule,
  ],

  providers: [
    AuthGaurd,
    AuthService,
    UsersService,
    ProductService,
    CartService,
    Countries,
    SkeletonMockData],

})

export class SharedModule { }
