import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyBillersPage } from './verify-billers.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyBillersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyBillersPageRoutingModule {}
