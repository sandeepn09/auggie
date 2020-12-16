import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthresultPageRoutingModule } from './authresult-routing.module';

import { AuthresultPage } from './authresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthresultPageRoutingModule
  ],
  declarations: [AuthresultPage]
})
export class AuthresultPageModule {}
