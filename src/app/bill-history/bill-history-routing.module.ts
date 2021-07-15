import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillHistoryPage } from './bill-history.page';

const routes: Routes = [
  {
    path: '',
    component: BillHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillHistoryPageRoutingModule {}
