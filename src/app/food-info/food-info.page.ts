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
  logDate: string;
  logTime: string;
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
    this.logUnit = "Units";
    this.logCalories = 0;
    let currentDateTime = new Date().toISOString();
    this.logDate = currentDateTime
    this.logTime = currentDateTime
  }

  timeUtil(hours, minutes) {
    return hours + ":" + ((minutes < 10) ? ("" + "0" + minutes) : ("" + minutes));
  }

  logInfo() {
    if (this.resources.IS_DEBUG_MODE) console.log(this.logDate);
    if (this.resources.IS_DEBUG_MODE) console.log(this.logTime);
    if (this.resources.IS_DEBUG_MODE) console.log(this.logFood);
    if (this.resources.IS_DEBUG_MODE) console.log(this.logQty);
    if (this.resources.IS_DEBUG_MODE) console.log(this.logCalories);
    let obj = {
      date: new Date(this.logDate),
      time: new Date(this.logTime),
      food: this.logFood,
      qty: this.logQty,
      cal: this.logCalories ? this.logCalories : 0,
      unit: this.logUnit
    }
    if (this.resources.IS_DEBUG_MODE) console.log(obj);
    this.resources.addFoodLog(obj);
    this.closeModal({
      isFoodInfoAdded: true
    });
  }

  closeModal(obj) {
    if (this.resources.IS_DEBUG_MODE) console.log("closing modal");
    if (obj) this.modal.dismiss(obj);
    else this.modal.dismiss();
  }

  getFoodInfo() {
    this.restService.getNutritionixData(this.logFood).subscribe((data) => {
      if (this.resources.IS_DEBUG_MODE) console.log(data)
    })
  }

  computeCalories() {
    if (this.resources.IS_DEBUG_MODE) console.log(typeof this.logQty)
    if(this.logQty == undefined || this.logQty < 0) {
      this.logQty=  0
    }
    this.logQty = 1 * parseFloat(""  + this.logQty)
    if (this.resources.IS_DEBUG_MODE) console.log(this.logQty)
    let unit_qty_calories = Math.round(this.selectedFood.nf_calories)/ this.selectedFood.serving_qty
    this.logCalories = this.logQty * unit_qty_calories
  }

  processInfo(foodName) {
    let results = this.resources.getFoodResult()
    this.selectedFood = results.filter((elem: any) => {
      return elem.brand_name_item_name == foodName
    })[0]
    if (this.resources.IS_DEBUG_MODE) console.log(this.selectedFood)
    this.logFood = foodName
    this.logUnit = this.selectedFood.serving_unit
    this.logQty = this.selectedFood.serving_qty
    this.logCalories = Math.round(this.selectedFood.nf_calories)
  }

  ngOnInit() {
  }

}
