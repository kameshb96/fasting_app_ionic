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
  isPageInit: boolean = false;
  // shouldRefreshLog: boolean = false;
  constructor(private modalController: ModalController,
    private resources: ResourcesService,
    private storage: StorageService,
    private actionSheetController: ActionSheetController,
    private restService: RestService) {
      this.resources.isLoggedIn.subscribe((value) => {
        console.log("VALUE=", value)
        if(value) {
          this.isPageInit = false
          setTimeout(() => {
            this.slides.update().then(() => {
              console.log("slide updated")
            })
          }, 2000)
        }
        else this.isPageInit = true 
      })
  }

  ngOnInit() {
    // this.slides.slideTo(1, 500);
    // this.isPageInit = true;
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
    if (this.resources.currentNutritionPageDate) {
      this.currentPageDate = new Date(this.resources.currentNutritionPageDate);
    } else {
      this.currentPageDate = new Date();
    }
    // this.slides.slideTo(1, 0);
    this.slides.getActiveIndex().then((index) => {
      console.log(index)
      if(index != 1) {
        this.slides.slideTo(1, 0);
        if(!this.isPageInit) {
          this.isPageInit = true
        }
      }
      if(!this.isPageInit) this.setPageData(new Date()) 
    })
    console.log(this.foodLogs)
    // if(!this.isPageInit) {
    //   this.isPageInit = true
    //   this.didChange()
    //  } //Handling data for different users 
  }

  ionViewWillLeave() {
    console.log("Leaving nutrition page")
    this.foodLogs = []
    this.slides.slideTo(2, 0)
    this.slides.getActiveIndex().then((index) => {
      console.log("INDEX=", index)
      this.slides.getSwiper().then((obj) => {
        console.log(obj)
      })
    })
  }

  didChange() {
    this.slides.getActiveIndex().then(index => {
      console.log("Did change" + index);
      if (index == 1) this.setPageData(this.currentPageDate);
      else if (index == 0)
        this.setPageData(this.previousPageDate);
      else if (index == 2)
        this.setPageData(this.nextPageDate);
      this.slides.slideTo(1, 0);
    });
  }

  setPageData(d: Date) {
    console.log("IN SET PAGE DATA")
    let date = new Date(d);
    this.resources.currentNutritionPageDate = new Date(date);
    this.previousPageDate = new Date(date);
    this.previousPageDate.setDate(this.previousPageDate.getDate() - 1);
    this.nextPageDate = new Date(date);
    this.nextPageDate.setDate(this.nextPageDate.getDate() + 1);
    this.currentPageDate = new Date(date);
    if (this.resources.IS_DEBUG_MODE) console.log(date);
    this.getFilteredLogs(date).then((res) => {
      this.filteredFoodLogs = res
      this.title = this.setTitle2(date);
      date.setDate(date.getDate() - 1);
      this.getFilteredLogs(date).then((res2) => {
        this.previousFilteredFoodLogs = res2
        this.previousTitle = this.setTitle2(date);
        date.setDate(date.getDate() + 2);
        this.getFilteredLogs(date).then((res3) => {
          this.nextFilteredFoodLogs = res3
          this.nextTitle = this.setTitle2(date);
        })
      })
    })
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

  async getFilteredLogs(date: Date) {
    let tmp = []
    console.log("SHOULD REFRESH=", this.resources.shouldRefreshLog)
    await this.resources.getFoodLogs().then((val) => {
      // this.resources.shouldRefreshLog = false   
      this.foodLogs = val
      let n = this.foodLogs.length;
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
    })
    return tmp;
  }

  filterLogsByDate() {
    this.resources.getFoodLogs().then((res) => {
      this.foodLogs = res
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
    })
    // this.filteredFoodLogs = this.foodLogs.filter( (log)=> this.checkDate(log));
  }

  refreshPage(refreshDate = new Date(), shouldSlide = true) {
    // this.foodLogs = this.resources.getFoodLogs();
    console.log("In refresh page")
    this.setPageData(refreshDate);
    if (shouldSlide) this.slides.slideTo(1, 0);
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
      console.log(res)
      if (res && res.data) {
        this.resources.shouldRefreshLog = true
        this.refreshPage(this.currentPageDate, false);
      }
    }, err => {
      if (this.resources.IS_DEBUG_MODE) console.log(err);
    });
    modal.present();
  }

  async deleteLog(id) {
    this.resources.shouldRefreshLog = true
    await this.resources.deleteLog(id).then(() => {
      this.refreshPage(this.currentPageDate, false);
    })
  }

  async openActionSheet(event, date, _id) {
    console.log(_id)
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: async () => {
          await this.deleteLog(_id);
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