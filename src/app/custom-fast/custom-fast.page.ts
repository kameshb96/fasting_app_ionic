import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-custom-fast',
  templateUrl: './custom-fast.page.html',
  styleUrls: ['./custom-fast.page.scss'],
})
export class CustomFastPage implements OnInit {
  fastDuration: string;
  fastTitle: string;
  fastDescription: string;
  constructor(private resources: ResourcesService, 
              private modal: ModalController,
              private toastController: ToastController) { 
                let currentDateTime = new Date();
                currentDateTime.setHours(12);
                currentDateTime.setMinutes(0);
                this.fastTitle = "Custom fast (12 hours)";
                this.fastDuration = currentDateTime.toISOString();
              }

  ngOnInit() {
  }

  async presentToast(toastMessage) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: toastMessage,
      showCloseButton: true
    });

    await toast.present();
  }

  addCustomFast() {
    if(!this.fastDuration) {
      this.presentToast('Please Enter Fast Duration');
      return;
    }
    if(!this.fastTitle) {
      this.presentToast('Please Enter Fast Title');
      return;
    }
    console.log(this.fastDuration)
    let isotime = new Date(this.fastDuration).toISOString()
    this.resources.addFast(isotime, this.fastTitle, this.fastDescription, false).then(() => {
      this.modal.dismiss();
      this.presentToast('Custom Fast Added');
    })
    if (this.resources.IS_DEBUG_MODE) console.log(this.resources.getFasts());
  }

  closeModal() {
    this.modal.dismiss();
  }


}
