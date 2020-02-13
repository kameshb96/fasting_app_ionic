import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-custom-fast',
  templateUrl: './custom-fast.page.html',
  styleUrls: ['./custom-fast.page.scss'],
})
export class CustomFastPage implements OnInit {
  fastDuration: any;
  fastTitle: string;
  fastDescription: string;
  constructor(private resources: ResourcesService, private modal: ModalController) { }

  ngOnInit() {
  }

  addCustomFast() {
    this.resources.addFast(this.fastDuration, this.fastTitle, this.fastDescription);
    console.log(this.resources.getFasts());
    this.modal.dismiss();
  }

  closeModal() {
    this.modal.dismiss();
  }


}
