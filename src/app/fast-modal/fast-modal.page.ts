import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { ResourcesService } from '../shared/resources.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-fast-modal',
  templateUrl: './fast-modal.page.html',
  styleUrls: ['./fast-modal.page.scss'],
})
export class FastModalPage implements OnInit {
  fastDuration: any;
  fastTitle: string;
  fastDescription: string;
  selected: any;
  index: number;
  fasts: any;
  constructor(private modal: ModalController, 
              public navParams: NavParams,
              private resources: ResourcesService,
              private navController: NavController,
              private storage: StorageService) {
   }

  ngOnInit() {
    this.selected = this.navParams.get('selectedFast');
    this.index = this.navParams.get('index');
    this.fasts = this.navParams.get('fasts');
    this.fastDuration = this.setDurationText();
    this.fastTitle = this.selected.title;
    this.fastDescription = this.selected.description;
  }

  setDurationText() {
    let duration = new Date(this.selected.duration);
    let hours = duration.getHours();
    let mins = duration.getMinutes();
    let titleText = "" + ((hours < 10) ? ("0" + hours) : hours)
                         + ":" 
                         + ((mins < 10) ? ("0" + mins) : mins);
    return titleText;
  }

  closeModal() {
    this.modal.dismiss();
  }

  deleteFast() {
    this.fasts.splice(this.index, 1);
    console.log(this.fasts);
    this.storage.updateFasts(this.fasts);
    this.modal.dismiss();
  }

  setFast() {
    this.resources.setChosenFast(this.selected);
    this.modal.dismiss();
    this.navController.navigateRoot(`/tabs/timer`);
  }

}
