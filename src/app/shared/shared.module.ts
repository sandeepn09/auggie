import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MenuHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [MenuHeaderComponent]
})
export class SharedModule { }
