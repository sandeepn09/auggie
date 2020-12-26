import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import {TabsComponent} from './tabs/tabs.component';
import {UserInfoPage} from './user-info/user-info.page';
import {ViewPaymethodPage} from './view-paymethod/view-paymethod.page';
import {} from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, UserInfoPage, ViewPaymethodPage]
})
export class DashboardPageModule {}
