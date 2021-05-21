import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundingAccountPageRoutingModule } from './funding-account-routing.module';

import { FundingAccountPage } from './funding-account.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FundingAccountPageRoutingModule,
    SharedModule
  ],
  declarations: [FundingAccountPage]
})
export class FundingAccountPageModule {}
