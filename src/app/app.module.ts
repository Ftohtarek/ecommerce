import { ErrorHandler, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AdminAuthGuard } from 'shared/service/admin-auth-guard.service';
import { AuthGaurd } from 'shared/service/auth-gaurd.service';
import { AuthService } from 'shared/service/auth.service';
import { UsersService } from 'shared/service/users.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppErrorHandler } from './Errors/app-handler.error';
import { firebaseConfig } from './firebase.config';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    AuthGaurd,
    AdminAuthGuard,
    AuthService,
    UsersService,
    { provide: ErrorHandler, useClass: AppErrorHandler },

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

