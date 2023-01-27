import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMaterialModule } from './material.module';
// component
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/cart/cart.component';
// firebase
import { initializeApp, provideFirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { DatabaseModule, provideDatabase, getDatabase } from '@angular/fire/database';
import { AuthModule } from '@angular/fire/auth';
import { firebaseConfig } from './firebase.config';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductComponent } from './component/product/product.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrderSuccussComponent } from './component/order-succuss/order-succuss.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrderComponent } from './component/my-order/my-order.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    CartComponent,
    AdminProductComponent,
    ProductComponent,
    CheckOutComponent,
    OrderSuccussComponent,
    AdminOrdersComponent,
    MyOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMaterialModule,
    FirebaseAppModule,
    DatabaseModule,
    AuthModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

// https://firebase.google.com/docs/web/setup#available-libraries
