import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { MaxLengthPipe } from './pipe/max-length.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    MaxLengthPipe,

  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
