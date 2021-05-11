import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulePaymentPage } from './schedule-payment.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulePaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulePaymentPageRoutingModule {}
