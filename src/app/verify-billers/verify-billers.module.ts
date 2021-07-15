import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyBillersPageRoutingModule } from './verify-billers-routing.module';

import { VerifyBillersPage } from './verify-billers.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyBillersPageRoutingModule,
    SharedModule
  ],
  declarations: [VerifyBillersPage]
})
export class VerifyBillersPageModule {}
