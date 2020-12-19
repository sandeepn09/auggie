import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferalFormPageRoutingModule } from './referal-form-routing.module';

import { ReferalFormPage } from './referal-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferalFormPageRoutingModule
  ],
  declarations: [ReferalFormPage]
})
export class ReferalFormPageModule {}
