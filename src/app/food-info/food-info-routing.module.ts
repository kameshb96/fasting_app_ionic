import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodInfoPage } from './food-info.page';

const routes: Routes = [
  {
    path: '',
    component: FoodInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodInfoPageRoutingModule {}
