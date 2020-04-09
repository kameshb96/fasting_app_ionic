import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';
import { ModalController } from '@ionic/angular';
import { PasswordPage } from '../password/password.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private resources: ResourcesService,
              private modal: ModalController) { }

  ngOnInit() {
  }

  logout() {
    this.resources.logout()
  }

  async changePassword() {
    const modal = await this.modal.create({
      component: PasswordPage
    })
    modal.present();
  }

}
