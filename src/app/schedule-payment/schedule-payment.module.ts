import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePaymentPageRoutingModule } from './schedule-payment-routing.module';

import { SchedulePaymentPage } from './schedule-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SchedulePaymentPageRoutingModule
  ],
  declarations: [SchedulePaymentPage]
})
export class SchedulePaymentPageModule {}
