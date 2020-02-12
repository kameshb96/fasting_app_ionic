import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.page.html',
  styleUrls: ['./food-info.page.scss'],
})
export class FoodInfoPage implements OnInit {
  logDate: any;
  logTime: any;
  logFood: string;
  logQty: number;
  logCalories: number;
  constructor(private storage: StorageService) { }

  logInfo() {
    console.log(this.logDate);
    console.log(this.logTime);
    console.log(this.logFood);
    console.log(this.logQty);
    console.log(this.logCalories);
    let obj = {
      date: this.logDate,
      time: this.logTime,
      food: this.logFood,
      qty: this.logQty,
      cal: this.logCalories ? this.logCalories : 0
    }
    this.storage.addLogItem(obj);
    console.log(this.storage.logs);
  }

  ngOnInit() {
  }

}
