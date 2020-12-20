import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import {UserInfoPage} from './user-info/user-info.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'user-info',
    component: UserInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
