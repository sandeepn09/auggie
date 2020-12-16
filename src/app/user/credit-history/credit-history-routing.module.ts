import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditHistoryPage } from './credit-history.page';

const routes: Routes = [
  {
    path: '',
    component: CreditHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditHistoryPageRoutingModule {}
