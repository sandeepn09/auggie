import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthresultPage } from './authresult.page';

const routes: Routes = [
  {
    path: '',
    component: AuthresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthresultPageRoutingModule {}
