import { ErrorHandler, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from 'admin/admin.module';
import { AdminAuthGuard } from 'shared/service/admin-auth-guard.service';
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
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    AdminAuthGuard,
    { provide: ErrorHandler, useClass: AppErrorHandler },

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

