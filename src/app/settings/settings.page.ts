import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';
import { ModalController } from '@ionic/angular';
import { PasswordPage } from '../password/password.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(private resources: ResourcesService,
    private modal: ModalController,
    private router: Router) { 
      console.log("Settings constructor")
      // this.resources.getSettings().then((res: any) => {
      //   this.darkMode = res.data.dark
      //   this.notification = res.data.notifications    
      //   console.log(this.darkMode, this.notification)
      //   this.resources.checkDarkTheme(this.darkMode)
      // })
    }
    
  

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
    console.log(this.router.url)
    if(this.router.url != '/tabs/settings')
      return
    console.log(this.resources.darkMode)
    let obj = {
      settings: {
        notifications: this.resources.notification ? this.resources.notification : false,
        dark: this.resources.darkMode ? this.resources.darkMode : false
      }
    }
    console.log(obj)
    this.resources.updateSettings(obj)
  }

}
