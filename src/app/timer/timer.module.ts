import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerPageRoutingModule } from './timer-routing.module';

import { TimerPage } from './timer.page';

import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerPageRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      animation: false,
      responsive: true,
      renderOnClick: false
    })
  ],
  declarations: [TimerPage]
})
export class TimerPageModule {}
