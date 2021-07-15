import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepsHomePage } from './steps-home.page';

const routes: Routes = [
  {
    path: '',
    component: StepsHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepsHomePageRoutingModule {}
