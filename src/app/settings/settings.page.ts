import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';
import { ModalController } from '@ionic/angular';
import { PasswordPage } from '../password/password.page';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { LocalNotificationsService } from '../local-notifications.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
  constructor(private resources: ResourcesService,
    private modal: ModalController,
    private router: Router,
    private storage: StorageService,
    private notif: LocalNotificationsService) { 
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

  ngOnDestroy() {
    // ...
    console.log(this.resources.darkMode)
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

  async settingsChanged() {
    console.log(this.resources.darkMode)
    // let st = ""
    // await this.storage.getToken().then((token) => {
    //   st = token
    // })
    if(!this.resources.isLoggedIn) {
      console.log("sessionToken not found ")
      return
    }    
    if(this.resources.notification) {
      this.notif.requestNotifications()
    } 
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
