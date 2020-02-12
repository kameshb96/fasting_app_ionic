import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomFastPage } from './custom-fast.page';

const routes: Routes = [
  {
    path: '',
    component: CustomFastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomFastPageRoutingModule {}
