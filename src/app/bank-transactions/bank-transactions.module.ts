import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BankTransactionsPageRoutingModule } from './bank-transactions-routing.module';

import { BankTransactionsPage } from './bank-transactions.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BankTransactionsPageRoutingModule,
    SharedModule
  ],
  declarations: [BankTransactionsPage]
})
export class BankTransactionsPageModule {}
