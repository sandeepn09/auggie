import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillHistoryPageRoutingModule } from './bill-history-routing.module';

import { BillHistoryPage } from './bill-history.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [BillHistoryPage]
})
export class BillHistoryPageModule {}
