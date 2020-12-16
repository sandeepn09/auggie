import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthhelpPageRoutingModule } from './authhelp-routing.module';

import { AuthhelpPage } from './authhelp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthhelpPageRoutingModule
  ],
  declarations: [AuthhelpPage]
})
export class AuthhelpPageModule {}
