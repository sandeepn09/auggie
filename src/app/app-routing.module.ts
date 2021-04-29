import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
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
    path: 'profile',
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'credit-history',
    loadChildren: () => import('./user/credit-history/credit-history.module').then( m => m.CreditHistoryPageModule)
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
    path: 'view-profile',
    loadChildren: () => import('./user/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  {
    path: 'pay-method',
    loadChildren: () => import('./pay-method/pay-method.module').then( m => m.PayMethodPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'funding-account',
    loadChildren: () => import('./funding-account/funding-account.module').then( m => m.FundingAccountPageModule)
  },
  {
    path: 'funding-accounts',
    loadChildren: () => import('./funding-accounts/funding-accounts.module').then( m => m.FundingAccountsPageModule)
  },
  {
    path: 'make-payment',
    loadChildren: () => import('./make-payment/make-payment.module').then( m => m.MakePaymentPageModule)
  },
  {
    path: 'payment-confirm',
    loadChildren: () => import('./payment-confirm/payment-confirm.module').then( m => m.PaymentConfirmPageModule)
  },
  {
    path: 'profile-view',
    loadChildren: () => import('./profile-view/profile-view.module').then( m => m.ProfileViewPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
