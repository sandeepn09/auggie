import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBillsPage } from './add-bills.page';

const routes: Routes = [
  {
    path: '',
    component: AddBillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBillsPageRoutingModule {}
