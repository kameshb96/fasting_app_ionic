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
  constructor(private modalController: ModalController, 
              private resources: ResourcesService, 
              private storage: StorageService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.foodLogs = this.resources.getFoodLogs();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: FoodInfoPage
    })
    modal.present();
  }

}
