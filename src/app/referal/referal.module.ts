import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferalPageRoutingModule } from './referal-routing.module';

import { ReferalPage } from './referal.page';
import { SharedModule } from '../shared/shared.module';
import { RafPopoverComponent } from '../shared/raf-popover/raf-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferalPageRoutingModule,
    SharedModule
  ],
  declarations: [ReferalPage, RafPopoverComponent],
  entryComponents: [RafPopoverComponent]
  
})
export class ReferalPageModule {}
