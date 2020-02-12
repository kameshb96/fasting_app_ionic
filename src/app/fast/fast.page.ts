import { Component, OnInit } from '@angular/core';
import { ResourcesService, Fast } from '../shared/resources.service';
import { ConsoleReporter } from 'jasmine';
import { ModalController } from '@ionic/angular';
import { CustomFastPage } from '../custom-fast/custom-fast.page';
@Component({
  selector: 'app-fast',
  templateUrl: './fast.page.html',
  styleUrls: ['./fast.page.scss'],
})
export class FastPage implements OnInit {
  isPlay: boolean;
  percent: number;
  interval: any;
  fasts: Array<Fast>;
  constructor(private resources: ResourcesService, private modal: ModalController) {
    this.isPlay = false;
    this.percent = 100;
   }

  ngOnInit() {
    this.fasts = this.resources.getFasts();
    console.log(this.fasts);
  }

  async openCustomFastModal() {
    const modal = await this.modal.create({
      component: CustomFastPage
    })
    modal.present();
  }
  

  resetTime() {
    this.percent = 100;
    this.isPlay = false;
    clearInterval(this.interval);
    this.interval = null;
  }

  startTime() {
    this.isPlay = !this.isPlay;
    if(this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    else {
      this.interval = setInterval(() => {
        this.percent -= 1;
      }, 100);
    }
  }
}
