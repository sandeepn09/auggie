import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardPage } from "./dashboard.page";
import { UserInfoPage } from "./user-info/user-info.page";
import { ViewPaymethodPage } from "./view-paymethod/view-paymethod.page";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      {
        path: 'user-info',
        component: UserInfoPage,
      },
      {
        path: 'view-paymethod',
        component: ViewPaymethodPage,
      },
      {
        path: '',
        redirectTo: '/dashboard/view-paymethod',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
