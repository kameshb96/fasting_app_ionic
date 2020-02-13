import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

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
  constructor(private modal: ModalController, public navParams: NavParams) {
   }

  ngOnInit() {
    this.selected = this.navParams.get('selectedFast');
    this.index = this.navParams.get('index');
    this.fasts = this.navParams.get('fasts');
    this.fastDuration = this.selected.duration;
    this.fastTitle = this.selected.title;
    this.fastDescription = this.selected.description;
  }

  deleteFast() {
    this.fasts.splice(this.index, 1);
    console.log(this.fasts);
    this.modal.dismiss();
  }

}
