import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FastPageRoutingModule } from './fast-routing.module';

import { FastPage } from './fast.page';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { LocalNotificationsService } from '../local-notifications.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FastPageRoutingModule,
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
  declarations: [FastPage],
  providers: [LocalNotificationsService]
})
export class FastPageModule {}
