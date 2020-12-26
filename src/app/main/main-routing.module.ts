import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MainPage,
    children: [
      {
        path: 'user-dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('../pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
      },
      {
        path: 'payment-methods',
        loadChildren: () => import('../pages/payment-methods/payment-methods.module').then( m => m.PaymentMethodsPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/main/user-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
