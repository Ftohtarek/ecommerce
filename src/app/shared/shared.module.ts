import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'shared/shared-modules.module';

import { AutoCompleteFieldComponent } from './component/auto-complete-field/auto-complete-field.component';
import { CardPlaceholder } from './component/card/card-placeholder.component';
import { CardComponent } from './component/card/card.component';
import { ConfirmPopupComponent } from './component/confirm-popup/confirm-popup.component';
import { OrderTableComponent } from './component/order-table/order-table.component';
import { QuantityComponent } from './component/quantity/quantity.component';
import { Countries } from './models/countries';
import { AuthService } from './service/auth.service';
import { CartService } from './service/cart.service';
import { OrdersService } from './service/orders.service';
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
    SharedModulesModule,
  ],
  exports: [
    AutoCompleteFieldComponent,
    OrderTableComponent,
    QuantityComponent,
    CardComponent,
    CardPlaceholder,
    ConfirmPopupComponent,
    
    SharedModulesModule,
  ],

  providers: [
    AuthService,
    ProductService,
    CartService,
    Countries,
    OrdersService,
    SkeletonMockData
  ],

})

export class SharedModule { }
