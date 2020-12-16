import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditHistoryPageRoutingModule } from './credit-history-routing.module';

import { CreditHistoryPage } from './credit-history.page';
import { MessageComponentModule } from '../../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditHistoryPageRoutingModule,
    MessageComponentModule
  ],
  declarations: [CreditHistoryPage]
})
export class CreditHistoryPageModule {}
