import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthhelpPage } from './authhelp.page';

const routes: Routes = [
  {
    path: '',
    component: AuthhelpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthhelpPageRoutingModule {}
