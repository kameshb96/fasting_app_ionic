import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastModalPageRoutingModule } from './fast-modal-routing.module';

import { FastModalPage } from './fast-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastModalPageRoutingModule
  ],
  declarations: [FastModalPage]
})
export class FastModalPageModule {}
