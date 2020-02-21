import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FoodInfoPage } from '../food-info/food-info.page';
import { ResourcesService } from '../shared/resources.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {
  foodLogs: Array<any>;
  filteredFoodLogs: Array<any>;
  currentPageDate: Date;
  title: string;
  constructor(private modalController: ModalController, 
              private resources: ResourcesService, 
              private storage: StorageService) {}

  ngOnInit() {
    this.currentPageDate =  new Date();
    this.title = "Today";
  }

  checkDate(log) {
    let date : Date = log.date;
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();

    return (this.currentPageDate.getMonth() == month 
            && this.currentPageDate.getDate() == day 
            && this.currentPageDate.getFullYear() == year);
  }

  ionViewWillEnter() {
    this.foodLogs = this.resources.getFoodLogs();
    this.filterLogsByDate();
  }

  timeUtil(hours, minutes) {
    return hours + ":" + ((minutes < 10) ? ("" + "0" + minutes) : ("" + minutes));
  }

  //current, page  current - page / (1000 * 60 * 60 * 24) = no. of day between 
  
  setTitle() {
    let currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    let cpd = new Date(this.currentPageDate);
    cpd.setHours(0,0,0,0);
    let diff = (currentDate.getTime() - cpd.getTime()) / (1000 * 3600 * 24);
    if(diff == 0) this.title = "Today";
    else if(diff == 1) this.title = "Yesterday";
    else if(diff == -1) this.title = "Tomorrow";
    // Returns value of sample format: Thursday, Feb 20
    else this.title = cpd.toLocaleString('default', { weekday: 'long' }) 
                      + ', ' 
                      + cpd.toLocaleString('default', { month: 'long' }).substr(0, 3)
                      + ' '
                      + cpd.getDate();
  }

  nextDate() {
    this.currentPageDate.setDate(this.currentPageDate.getDate()+1);
    this.filterLogsByDate();
    this.setTitle();
    console.log(this.filteredFoodLogs);
    console.log(this.title);
  }

  previousDate() {
    this.currentPageDate.setDate(this.currentPageDate.getDate()-1);
    this.filterLogsByDate();
    this.setTitle();
    console.log(this.filteredFoodLogs);
    console.log(this.title);
  }

  filterLogsByDate() {

    let fl = this.resources.getFoodLogs();
    fl.forEach(e => {
      console.log(e);
      if (e.time instanceof Date) {
        e.time = this.timeUtil(e.time.getHours(), e.time.getMinutes());
      }
    })
    this.foodLogs = fl;
    this.filteredFoodLogs = this.foodLogs.filter((log) => this.checkDate(log));
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: FoodInfoPage
    })
    modal.present();
  }

}
