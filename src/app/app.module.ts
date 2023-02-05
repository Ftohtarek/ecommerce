import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
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
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ProductComponent } from './component/product/product.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrderSuccussComponent } from './component/order-succuss/order-succuss.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrderComponent } from './component/my-order/my-order.component';

// firebase
// import { initializeApp, provideFirebaseApp, FirebaseAppModule } from '@angular/fire/app';
// import { DatabaseModule, provideDatabase, getDatabase } from '@angular/fire/database';
// import { AuthModule, authState, provideAuth, } from '@angular/fire/auth';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebaseConfig } from './firebase.config';
import { AuthService } from './service/auth.service';
import { AuthGaurd } from './service/auth-gaurd.service';
import { UsersService } from './service/users.service';
import { AdminAuthGuard } from './service/admin-auth-guard.service';
import { SignupComponent } from './component/signup/signup.component';
import { AppErrorHandler } from './Errors/app-handler.error';
import { RegisterService } from './service/register.service';
import { SigninService } from './service/signin.service';
import { AdminProductFormComponent } from './admin/admin-product-form/admin-product-form.component';
import { ProductService } from './service/product.service';
import { CustomFormsModule } from 'ng2-validation';
import { CardComponent } from './shared-component/card/card.component'
import { CardPlaceholder } from './shared-component/card/card-placeholder.component'
import { CartService } from './service/cart.service';
import { QuantityComponent } from './shared-component/quantity/quantity.component';

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
    MyOrderComponent,
    SignupComponent,
    AdminProductFormComponent,
    CardComponent,
    CardPlaceholder,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMaterialModule,
    ReactiveFormsModule,
    CustomFormsModule,
    // 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
  ],
  providers: [
    AuthService,
    AuthGaurd,
    UsersService,
    AdminAuthGuard,
    RegisterService,
    SigninService,
    ProductService,
    CartService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

// https://firebase.google.com/docs/web/setup#available-libraries
