import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { ModalController } from '@ionic/angular';
import { ResourcesService } from '../shared/resources.service';
@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.page.html',
  styleUrls: ['./food-info.page.scss'],
})
export class FoodInfoPage implements OnInit {
  logDate: Date;
  logTime: Date;
  logFood: string;
  logQty: number;
  logCalories: number;
  unit: string;
  constructor(private storage: StorageService, private resources: ResourcesService, private modal: ModalController) { 
    this.unit = "g";
  }

  timeUtil(hours, minutes) {
    return hours + ":" + ((minutes < 10) ? ("" + "0" + minutes) : ("" + minutes));
  }

  logInfo() {
    console.log(this.logDate);
    console.log(this.logTime);
    console.log(this.logFood);
    console.log(this.logQty);
    console.log(this.logCalories);
    console.log(this.unit);
    let t = new Date(this.logTime)
    let obj = {
      date: new Date(this.logDate),
      time: t,
      food: this.logFood,
      qty: this.logQty,
      cal: this.logCalories ? this.logCalories : 0,
      unit: this.unit
    }
    console.log(obj);
    this.resources.addFoodLog(obj);
    this.modal.dismiss();
  }

  closeModal() {
    this.modal.dismiss();
  }

  ngOnInit() {
  }

}
