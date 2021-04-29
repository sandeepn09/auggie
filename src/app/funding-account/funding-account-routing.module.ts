import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundingAccountPage } from './funding-account.page';

const routes: Routes = [
  {
    path: '',
    component: FundingAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundingAccountPageRoutingModule {}
