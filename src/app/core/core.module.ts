import { NgModule } from '@angular/core';

import { SharedModule } from 'shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MaxLengthPipe } from './pipe/max-length.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    MaxLengthPipe
  ],
  imports: [
    CoreRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  exports:[
    NavbarComponent
  ]

})
export class CoreModule { }
