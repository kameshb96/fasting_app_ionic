import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodInfoPageRoutingModule } from './food-info-routing.module';

import { FoodInfoPage } from './food-info.page';
import { CompleteTestService } from '../complete-test.service';
import { AutoCompleteModule } from 'ionic4-auto-complete';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodInfoPageRoutingModule,
    AutoCompleteModule
  ],
  declarations: [FoodInfoPage],
  providers: [CompleteTestService]
})
export class FoodInfoPageModule {}
