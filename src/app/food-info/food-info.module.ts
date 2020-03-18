import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodInfoPageRoutingModule } from './food-info-routing.module';

import { FoodInfoPage } from './food-info.page';
import { CompleteTestService } from '../complete-test.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodInfoPageRoutingModule
  ],
  declarations: [FoodInfoPage],
  providers: [CompleteTestService]
})
export class FoodInfoPageModule {}
