import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastModalPage } from './fast-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FastModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastModalPageRoutingModule {}
