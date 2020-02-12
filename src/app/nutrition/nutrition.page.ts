import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FoodInfoPage } from '../food-info/food-info.page';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss'],
})
export class NutritionPage implements OnInit {

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: FoodInfoPage
    })
    modal.present();
  }

}
