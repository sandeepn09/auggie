import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PmtCardComponent } from './pmt-card/pmt-card.component';
import { ValidationPopoverComponent } from './validation-popover/validation-popover.component';
import { NumberMaskComponent } from './number-mask/number-mask.component';

@NgModule({
  declarations: [MenuHeaderComponent, PmtCardComponent, ValidationPopoverComponent, NumberMaskComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [MenuHeaderComponent, PmtCardComponent, ValidationPopoverComponent, NumberMaskComponent]
})
export class SharedModule { }
