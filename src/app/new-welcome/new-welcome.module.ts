import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWelcomePageRoutingModule } from './new-welcome-routing.module';

import { NewWelcomePage } from './new-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewWelcomePageRoutingModule
  ],
  declarations: [NewWelcomePage]
})
export class NewWelcomePageModule {}
