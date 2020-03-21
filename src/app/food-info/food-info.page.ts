import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { ModalController } from '@ionic/angular';
import { ResourcesService } from '../shared/resources.service';
import { RestService } from '../rest.service';
import { CompleteTestService } from '../complete-test.service';
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
  logUnit: string;
  selectedFood: any =  {}
  constructor(private storage: StorageService, 
              private resources: ResourcesService, 
              private modal: ModalController,
              private restService: RestService,
              private completeTestService: CompleteTestService) { 
    this.logUnit = "Units"
    this.logCalories = 0
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
    let obj = {
      date: new Date(this.logDate),
      time: new Date(this.logTime),
      food: this.logFood,
      qty: this.logQty,
      cal: this.logCalories ? this.logCalories : 0,
      unit: this.logUnit
    }
    console.log(obj);
    this.resources.addFoodLog(obj);
    this.closeModal({
      isFoodInfoAdded: true
    });
  }

  closeModal(obj) {
    console.log("closing modal");
    if (obj) this.modal.dismiss(obj);
    else this.modal.dismiss();
  }

  getFoodInfo() {
    this.restService.getNutritionixData(this.logFood).subscribe((data) => {
      console.log(data)
    })
  }

  computeCalories() {
    console.log(typeof this.logQty)
    if(this.logQty == undefined || this.logQty < 0) {
      this.logQty=  0
    }
    this.logQty = 1 * parseFloat(""  + this.logQty)
    console.log(this.logQty)
    let unit_qty_calories = Math.round(this.selectedFood.nf_calories)/ this.selectedFood.serving_qty
    this.logCalories = this.logQty * unit_qty_calories
  }

  processInfo(foodName) {
    let results = this.resources.getFoodResult()
    this.selectedFood = results.filter((elem: any) => {
      return elem.brand_name_item_name == foodName
    })[0]
    console.log(this.selectedFood)
    this.logFood = foodName
    this.logUnit = this.selectedFood.serving_unit
    this.logQty = this.selectedFood.serving_qty
    this.logCalories = Math.round(this.selectedFood.nf_calories)
  }

  ngOnInit() {
  }

}
