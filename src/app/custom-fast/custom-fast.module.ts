import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomFastPageRoutingModule } from './custom-fast-routing.module';

import { CustomFastPage } from './custom-fast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomFastPageRoutingModule
  ],
  declarations: [CustomFastPage]
})
export class CustomFastPageModule {}
