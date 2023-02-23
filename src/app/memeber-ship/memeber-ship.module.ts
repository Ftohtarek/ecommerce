import { NgModule } from '@angular/core';

import { SharedModulesModule } from 'shared/shared-modules.module';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { MemeberShipRoutingModule } from './memeber-ship-routing.module';
import { RegisterService } from './services/register.service';
import { SigninService } from './services/signin.service';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    MemeberShipRoutingModule,
    SharedModulesModule
  ],
  providers: [
    RegisterService,
    SigninService
  ]
})
export class MemeberShipModule { }
