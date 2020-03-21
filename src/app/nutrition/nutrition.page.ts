import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides, ActionSheetController } from '@ionic/angular';
import { FoodInfoPage } from '../food-info/food-info.page';
import { ResourcesService } from '../shared/resources.service';
import { StorageService } from '../storage.service';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;

  foodLogs: Array<any>;
  filteredFoodLogs: Array<any>;
  currentPageDate: Date;
  title: string;
  previousPageDate: Date;
  previousFilteredFoodLogs: Array<any>;
  previousTitle: string;
  nextPageDate: Date;
  nextFilteredFoodLogs: Array<any>;
  nextTitle: string;
  constructor(private modalController: ModalController,
    private resources: ResourcesService,
    private storage: StorageService,
    private actionSheetController: ActionSheetController,
    private restService: RestService) {

  }

  ngOnInit() {
    // this.slides.slideTo(1, 500);
  }

  checkDate(date1: Date, date2: Date) {
    if (!date1 || !date2) return false;
    return (date1.getMonth() == date2.getMonth()
      && date1.getDate() == date2.getDate()
      && date1.getFullYear() == date2.getFullYear());
  }

  timeUtil(hours, minutes) {
    return hours + ":" + ((minutes < 10) ? ("" + "0" + minutes) : ("" + minutes));
  }

  ionViewWillEnter() {
    if (this.resources.IS_DEBUG_MODE) console.log(this.resources.currentNutritionPageDate)
    if(this.resources.currentNutritionPageDate) {
      this.currentPageDate = new Date(this.resources.currentNutritionPageDate);  
    } else {
      this.currentPageDate = new Date(); 
    }
    this.slides.slideTo(1, 0);
  }

  didChange() {
    this.slides.getActiveIndex().then(index => {
      if (this.resources.IS_DEBUG_MODE) console.log("Did change" + index);
      if (index == 1) this.setPageData(this.currentPageDate);
      else if (index == 0)
        this.setPageData(this.previousPageDate);
      else if (index == 2)
        this.setPageData(this.nextPageDate);
      this.slides.slideTo(1, 0);
    });
  }

  setPageData(d: Date) {
    let date = new Date(d);
    this.resources.currentNutritionPageDate = new Date (date);
    this.previousPageDate = new Date(date);
    this.previousPageDate.setDate(this.previousPageDate.getDate() - 1);
    this.nextPageDate = new Date(date);
    this.nextPageDate.setDate(this.nextPageDate.getDate() + 1);
    this.currentPageDate = new Date(date);
    if (this.resources.IS_DEBUG_MODE) console.log(date);
    this.filteredFoodLogs = this.getFilteredLogs(date);
    this.title = this.setTitle2(date);
    date.setDate(date.getDate() - 1);
    this.previousFilteredFoodLogs = this.getFilteredLogs(date);
    this.previousTitle = this.setTitle2(date);
    date.setDate(date.getDate() + 2);
    this.nextFilteredFoodLogs = this.getFilteredLogs(date);
    this.nextTitle = this.setTitle2(date);
    if (this.resources.IS_DEBUG_MODE) console.log("Current: ", this.title, this.filteredFoodLogs);
    if (this.resources.IS_DEBUG_MODE) console.log("Prev: ", this.previousTitle, this.previousFilteredFoodLogs);
    if (this.resources.IS_DEBUG_MODE) console.log("Next: ", this.nextTitle, this.nextFilteredFoodLogs);
  }

  //current, page  current - page / (1000 * 60 * 60 * 24) = no. of day between 
  setTitle2(date: Date) {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let cpd = new Date(date);
    cpd.setHours(0, 0, 0, 0);
    let diff = (currentDate.getTime() - cpd.getTime()) / (1000 * 3600 * 24);
    let t = '';
    if (diff == 0) t = "Today";
    else if (diff == 1) t = "Yesterday";
    else if (diff == -1) t = "Tomorrow";
    else t = cpd.toLocaleString('default', { weekday: 'long' })
      + ', '
      + cpd.toLocaleString('default', { month: 'long' }).substr(0, 3)
      + ' '
      + cpd.getDate();
    return t;
  }

  // Obsolete
  setTitle() {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let cpd = new Date(this.currentPageDate);
    cpd.setHours(0, 0, 0, 0);
    let diff = (currentDate.getTime() - cpd.getTime()) / (1000 * 3600 * 24);
    if (diff == 0) this.title = "Today";
    else if (diff == 1) this.title = "Yesterday";
    else if (diff == -1) this.title = "Tomorrow";
    // Returns value of sample format: Thursday, Feb 20
    else this.title = cpd.toLocaleString('default', { weekday: 'long' })
      + ', '
      + cpd.toLocaleString('default', { month: 'long' }).substr(0, 3)
      + ' '
      + cpd.getDate();
  }

  nextDate() {
    this.slides.slideTo(2);
  }

  previousDate() {
    this.slides.slideTo(0);
  }

  getFilteredLogs(date: Date) {
    this.foodLogs = this.resources.getFoodLogs();
    let n = this.foodLogs.length;
    let tmp = [];
    for (let i = 0; i < n; i++) {
      this.foodLogs[i].date = this.foodLogs[i].date instanceof Date ? this.foodLogs[i].date : new Date(this.foodLogs[i].date);
      if (this.checkDate(this.foodLogs[i].date, date)) {
        tmp.push(this.foodLogs[i]);
      }
    }
    n = tmp.length;
    for (let i = 0; i < n; i++) {
      if (this.resources.IS_DEBUG_MODE) console.log(tmp[i]);
      let d1 = tmp[i].time instanceof Date ? tmp[i].date : new Date(tmp[i].date);
      tmp[i].formattedTime = this.timeUtil(d1.getHours(), d1.getMinutes());
    }

    return tmp;
  }

  filterLogsByDate() {
    this.foodLogs = this.resources.getFoodLogs();
    // this.filteredFoodLogs = this.foodLogs.filter( (log)=> this.checkDate(log));
    this.filteredFoodLogs.sort((a, b) => a.time > b.time ? 1 : -1);
    if (this.resources.IS_DEBUG_MODE) console.log(this.filteredFoodLogs);
    let fl = this.filteredFoodLogs;
    fl.forEach(e => {
      if (this.resources.IS_DEBUG_MODE) console.log(e);
      if (e.time instanceof Date) {
        e.time = this.timeUtil(e.time.getHours(), e.time.getMinutes());
      }
    });
    this.filteredFoodLogs = fl;
  }

  refreshPage(refreshDate = new Date(), shouldSlide=true) {
    // this.foodLogs = this.resources.getFoodLogs();
    this.setPageData(refreshDate);
    if(shouldSlide) this.slides.slideTo(1, 0);
  }

  async openModal() {
    if (this.resources.IS_DEBUG_MODE) console.log("Inside openModal");
    const modal = await this.modalController.create({
      component: FoodInfoPage,
      componentProps: {
        currentPageDate: this.currentPageDate.toISOString()
      }
    });
    modal.onDidDismiss().then(res => {
      if (this.resources.IS_DEBUG_MODE) console.log(res);
      if (res && res.data) this.refreshPage(this.currentPageDate, false);
    }, err => {
      if (this.resources.IS_DEBUG_MODE) console.log(err);
    });
    modal.present();
  }

  deleteLog(date) {
    this.resources.deleteLog(date);
    this.refreshPage(this.currentPageDate, false);
  }

  async openActionSheet(event, date) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteLog(date);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          if (this.resources.IS_DEBUG_MODE) console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}