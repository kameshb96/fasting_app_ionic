import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastPage } from './fast.page';

const routes: Routes = [
  {
    path: '',
    component: FastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FastPageRoutingModule {}
