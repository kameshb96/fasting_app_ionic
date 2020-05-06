import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ResourcesService, Fast } from '../shared/resources.service';
import { ModalController, PopoverController, ToastController, NavController } from '@ionic/angular';
import { CustomFastPage } from '../custom-fast/custom-fast.page';
import { FoodInfoPage } from '../food-info/food-info.page';
import { FastModalPage } from '../fast-modal/fast-modal.page';
import { RestService } from '../rest.service';
import { Router, Route } from '@angular/router';
import { LocalNotificationsService } from '../local-notifications.service';
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
    private navController: NavController,
    private notif: LocalNotificationsService
  ) {
    this.isPlay = false;
    this.percent = 100;
    console.log("Fast - Constructor");
    this.resources.isLoggedIn.subscribe((value) => { 
      console.log(value);
      if(!value) {
        this.reset()
      }
   });
  }

  ionViewWillEnter() {
    console.log('Fast - ionViewWillEnter')
    this.resources.isWsAvailable.next(true)
    this.rest.validateToken().then((res) => {
      if (res.status == 403) {
        this.navController.navigateBack('/login')
      }
      else if (res.status != 200) {
        this.resources.presentToast("Something went wrong")
        this.navController.navigateBack('/login')
      } else {
        // this.fasts =  this.resources.getFasts()
        this.resources.getFasts().then((res) => {
          this.fasts = res
        })
      }
    })
  }

  reset() {
    console.log("In fast reset")
    this.fasts = []
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
    for (; i < this.fasts.length; i++) {
      if (this.fasts[i].getTitle() === title) {
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
    modal.onDidDismiss().then(res => {
      if (this.resources.IS_DEBUG_MODE) console.log(res);
      console.log(res)
      if (res && res.data && res.data.isModalClosed) {
        this.resources.getFasts().then((res) => {
          this.fasts = res
        })
      }
    }, err => {
      if (this.resources.IS_DEBUG_MODE) console.log(err);
    });
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
    if (this.interval) {
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
