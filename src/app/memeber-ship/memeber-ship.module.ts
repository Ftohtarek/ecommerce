import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { RegisterService } from './services/register.service';
import { SigninService } from './services/signin.service';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent

  ],
  imports: [
    SharedModule,
  ],
  providers: [
    RegisterService,
    SigninService
  ]
})
export class MemeberShipModule { }
