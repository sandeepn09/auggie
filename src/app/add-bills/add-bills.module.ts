import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBillsPageRoutingModule } from './add-bills-routing.module';

import { AddBillsPage } from './add-bills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBillsPageRoutingModule
  ],
  declarations: [AddBillsPage]
})
export class AddBillsPageModule {}
