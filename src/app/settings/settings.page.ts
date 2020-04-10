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
  private darkMode: boolean
  private notification: boolean
  constructor(private resources: ResourcesService,
    private modal: ModalController) { }

  ngOnInit() {
    if (!this.resources.toggle) this.resources.checkDarkTheme();
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

  settingsChanged() {
    console.log(this.darkMode)
    let obj = {
      settings: {
        notifications: this.notification ? this.notification : false,
        dark: this.darkMode ? this.darkMode : false
      }
    }
    console.log(obj)
    this.resources.updateSettings(obj)
  }

}
