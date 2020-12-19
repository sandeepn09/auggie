import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferalFormPage } from './referal-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReferalFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferalFormPageRoutingModule {}
