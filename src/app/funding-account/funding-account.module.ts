import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundingAccountPageRoutingModule } from './funding-account-routing.module';

import { FundingAccountPage } from './funding-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FundingAccountPageRoutingModule
  ],
  declarations: [FundingAccountPage]
})
export class FundingAccountPageModule {}
