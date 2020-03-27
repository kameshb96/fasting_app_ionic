import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ResourcesService, Fast } from '../shared/resources.service';
import { ModalController, PopoverController, ToastController, NavController } from '@ionic/angular';
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
  constructor(
    private resources: ResourcesService, 
    private modal: ModalController,
    private popoverController: PopoverController,
    private rest: RestService,
    private router: Router,
    private toastController: ToastController,
    private navController: NavController
  ) {
    this.isPlay = false;
    this.percent = 100;
    console.log("Fast - Constructor");
   }

  ionViewWillEnter() {
    console.log('Fast - ionViewWillEnter')
    this.rest.validateToken().then((res) => {
      if(res.status == 403) {
        this.navController.navigateBack('/login')
      }
      else if(res.status != 200) {
        this.resources.presentToast("Something went wrong")
        this.navController.navigateBack('/login')
      } else {
        this.fasts =  this.resources.getFasts()
      }
    })
  }

  ngOnInit() {
    console.log('Fast - ngOnInit')
    // this.fasts = this.resources.getFasts();
    if (this.resources.IS_DEBUG_MODE) console.log(this.fasts);
  }

  async openCustomFastModal() {
    const modal = await this.modal.create({
      component: CustomFastPage
    })
    modal.present();
  }

  ionViewDidEnter() {
    console.log("Fast - ionViewDidEnter");
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
