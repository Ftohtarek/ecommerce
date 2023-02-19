import { ErrorHandler, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from 'admin/admin.module';
import { Countries } from 'shared/models/countries';
import { AdminAuthGuard } from 'shared/service/admin-auth-guard.service';
import { AuthGaurd } from 'shared/service/auth-gaurd.service';
import { AuthService } from 'shared/service/auth.service';
import { CartService } from 'shared/service/cart.service';
import { ProductService } from 'shared/service/product.service';
import { UsersService } from 'shared/service/users.service';
import { SharedModule } from 'shared/shared.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppErrorHandler } from './Errors/app-handler.error';
import { firebaseConfig } from './firebase.config';
import { MemeberShipModule } from './memeber-ship/memeber-ship.module';
import { ShoppingModule } from './shopping/shopping.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AdminModule,
    ShoppingModule,
    BrowserModule,
    MemeberShipModule,
    SharedModule,
    // 
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AdminAuthGuard,
    AuthGaurd,
    AuthService,
    UsersService,
    ProductService,
    CartService,
    Countries,
    { provide: ErrorHandler, useClass: AppErrorHandler },

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

