import { Component, OnInit } from '@angular/core';
import { ResourcesService, Fast } from '../shared/resources.service';
import { ModalController, PopoverController, ToastController } from '@ionic/angular';
import { CustomFastPage } from '../custom-fast/custom-fast.page';
import { FoodInfoPage } from '../food-info/food-info.page';
import { FastModalPage } from '../fast-modal/fast-modal.page';
import { RestService } from '../rest.service';
import { Router, Route } from '@angular/router';
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
  constructor(private resources: ResourcesService, 
              private modal: ModalController,
              private popoverController: PopoverController,
              private rest: RestService,
              private router: Router,
              private toastController: ToastController) {
    this.isPlay = false;
    this.percent = 100;
   }

  ngOnInit() {
    this.fasts = this.resources.getFasts();
    if (this.resources.IS_DEBUG_MODE) console.log(this.fasts);
    this.rest.validateToken().then((res) => {
      if(res.status == 403) {
        this.router.navigate(['/login'])
        return
      }
      else if(res.status != 200) {
        this.presentToast("Something went wrong")
        this.router.navigate(['/login'])
        return
      }
    })
  }

  async presentToast(toastMessage) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: toastMessage,
      showCloseButton: true
    });

    await toast.present();
  }

  async openCustomFastModal() {
    const modal = await this.modal.create({
      component: CustomFastPage
    })
    modal.present();
  }

  async openFastModal(event, title) {
    if (this.resources.IS_DEBUG_MODE) console.log(event);
    let selected = null;
    let i = 0;
    for(; i < this.fasts.length; i++) {
      if(this.fasts[i].getTitle() === title) {  
        selected = this.fasts[i];
        break;
      }
    }
    let data = {
      selectedFast: selected, 
      index: i,
      fasts: this.fasts
    };
    const modal = await this.modal.create({
      component: FastModalPage,
      componentProps: data
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
