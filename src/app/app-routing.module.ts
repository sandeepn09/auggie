import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';
import { PaymentGuard } from './guards/payment.guard';
import { DataResolverService } from './services/data-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    // redirectTo: 'edit-profile',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule),
    canLoad: [HomeGuard]
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule),
    canLoad: [HomeGuard]
  },
  {
    path: 'authhelp',
    loadChildren: () => import('./authhelp/authhelp.module').then( m => m.AuthhelpPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'authresult',
    loadChildren: () => import('./authresult/authresult.module').then( m => m.AuthresultPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'referal',
    loadChildren: () => import('./referal/referal.module').then( m => m.ReferalPageModule)
  },
  {
    path: 'referal-form',
    loadChildren: () => import('./referal-form/referal-form.module').then( m => m.ReferalFormPageModule)
  },
  {
    path: 'pay-method',
    loadChildren: () => import('./pay-method/pay-method.module').then( m => m.PayMethodPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'funding-account',
    loadChildren: () => import('./funding-account/funding-account.module').then( m => m.FundingAccountPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'funding-accounts',
    loadChildren: () => import('./funding-accounts/funding-accounts.module').then( m => m.FundingAccountsPageModule)
  },
  {
    path: 'payment-confirm',
    loadChildren: () => import('./payment-confirm/payment-confirm.module').then( m => m.PaymentConfirmPageModule)
  },
  {
    path: 'profile-view',
    loadChildren: () => import('./profile-view/profile-view.module').then( m => m.ProfileViewPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'add-payment',
    loadChildren: () => import('./add-payment/add-payment.module').then( m => m.AddPaymentPageModule),
    // canLoad: [AuthGuard, PaymentGuard]
  },
  {
    path: 'schedule-payment',
    resolve: {
      serviceProvider: DataResolverService
    },
    loadChildren: () => import('./schedule-payment/schedule-payment.module').then( m => m.SchedulePaymentPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then( m => m.PaymentsPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [HomeGuard]
})
export class AppRoutingModule { }
