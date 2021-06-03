import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileViewPageRoutingModule } from './profile-view-routing.module';

import { ProfileViewPage } from './profile-view.page';
import { SharedModule } from '../shared/shared.module';
import { PhoneFormatPipe } from '../pipes/phone-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileViewPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    
  ],
  declarations: [ProfileViewPage]
})
export class ProfileViewPageModule {}
