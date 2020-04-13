import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class LocalNotificationsService {

  constructor(private localNotifications: LocalNotifications,
    private platform: Platform) { }

  makeNotifications() {
    console.log("makeNotifications")
    //Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      text: 'Fasting about to end',
      sound: this.platform.is("android") ? 'file://sound.mp3' : 'file://beep.caf',
      data: { secret: "" }
    });


    // Schedule multiple notifications
    // this.localNotifications.schedule([{
    //    id: 1,
    //    text: 'Multi ILocalNotification 1',
    //    sound: this.platform.is("android") ? 'file://sound.mp3': 'file://beep.caf',
    //    data: { secret:"" }
    //   },{
    //    id: 2,
    //    title: 'Local ILocalNotification Example',
    //    text: 'Multi ILocalNotification 2',
    //    icon: 'http://example.com/icon.png'
    // }]);


    // Schedule delayed notification
    this.localNotifications.schedule({
       text: 'Delayed ILocalNotification',
       //new Date().getTime() + 3600)
       trigger: {at: new Date(new Date().getTime() + 5000)},
       led: 'FF0000',
       sound: this.platform.is("android") ? 'file://sound.mp3' : 'file://beep.caf'  
    });
  }

}

