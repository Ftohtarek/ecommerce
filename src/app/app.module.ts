import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMaterialModule } from './material.module';

import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';
import { MyOrdersComponent } from './component/orders/my-orders/my-orders.component';
import { ManageOrdersComponent } from './component/orders/manage-orders/manage-orders.component';
import { ManageProductComponent } from './component/orders/manage-product/manage-product.component';
import { CartComponent } from './component/cart/cart.component';


import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-3sPWDPnsB6_duJpxDxuQITdS5BPLsj4",
  authDomain: "angular15-ecommerce-app.firebaseapp.com",
  projectId: "angular15-ecommerce-app",
  storageBucket: "angular15-ecommerce-app.appspot.com",
  messagingSenderId: "986868364968",
  appId: "1:986868364968:web:5ca6feb6109c9b4b80b49d",
  measurementId: "G-E3EN38B4SC"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    MyOrdersComponent,
    ManageOrdersComponent,
    ManageProductComponent,
    CartComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// https://firebase.google.com/docs/web/setup#available-libraries
