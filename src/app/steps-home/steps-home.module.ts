import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepsHomePageRoutingModule } from './steps-home-routing.module';

import { StepsHomePage } from './steps-home.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepsHomePageRoutingModule,
    SharedModule
  ],
  declarations: [StepsHomePage]
})
export class StepsHomePageModule {}
