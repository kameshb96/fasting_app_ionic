import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ResourcesService } from '../shared/resources.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  private currentPassword: string
  private newPassword: string
  constructor(private modal: ModalController,
              private resources: ResourcesService,
              private navController: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.setPassword()
  }

  async setPassword() {
    await this.resources.getPassword().then((val) => {
      this.currentPassword = val
      console.log(this.currentPassword)
    })
  }

  changePassword() {
    this.resources.changePassword(this.newPassword).then((val) => {
      this.resources.presentToast("Password Changed")
      this.closeModal()
    })
  }

  closeModal() {
    this.modal.dismiss()
  }


}
