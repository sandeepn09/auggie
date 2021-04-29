import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundingAccountsPageRoutingModule } from './funding-accounts-routing.module';

import { FundingAccountsPage } from './funding-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundingAccountsPageRoutingModule
  ],
  declarations: [FundingAccountsPage]
})
export class FundingAccountsPageModule {}
