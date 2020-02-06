import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastPageRoutingModule } from './fast-routing.module';

import { FastPage } from './fast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastPageRoutingModule
  ],
  declarations: [FastPage]
})
export class FastPageModule {}
