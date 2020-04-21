import { Component, OnInit } from '@angular/core';
import { ResourcesService, Fast, CompletedFast } from '../shared/resources.service';
import { PopoverController, ToastController, NavController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { StorageService } from '../storage.service';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { LocalNotificationsService } from '../local-notifications.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  didReOpen: boolean;
  isPlay: boolean;
  percent: number;
  interval: any;
  titleText: string;
  fastTime: any = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  eatTime: any = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  initialSeconds: number;
  status: any;
  statusName: string;
  fastStartTime: Date;
  eatStartTime: Date;
  eatEndTime: Date;
  constructor(private resources: ResourcesService,
    private toastController: ToastController,
    private storage: StorageService,
    private rest: RestService,
    private router: Router,
    private navController: NavController,
    private notif: LocalNotificationsService
  ) {
    console.log("Timer - Constructor");
    if (this.resources.IS_DEBUG_MODE) console.log("constructor");
    this.didReOpen = false;
    console.log(this.resources.getChosenFast())       
    this.resources.getTimerInfo().then((res: any) => {
      if (res) {
        console.log(res)
        if(res.fastStartTime == "" || res.chosenFast == {})
          return
        console.log("UPDATING CHOSEN FAST")
        this.fastStartTime = new Date(res.fastStartTime);
        this.didReOpen = true;
        let d1 = new Date(res.fastStartTime);
        let d2 = new Date();
        // this.storage.getChosenFast().then((chosenFast) => {
        let chosenFast = res.chosenFast
        if (chosenFast) {
          if (this.resources.IS_DEBUG_MODE) console.log(chosenFast);
          let cf = chosenFast;
          this.resources.setChosenFast(new Fast(cf.title, cf.duration, cf.description, cf.IsPredefined));
          //cf = new Fast(cf.getTitle(), cf.getDuration(), cf.getDescription(), cf.getIsPreDefined());
          let dur = new Date(cf.duration);  
          let fastEndTime = new Date(d1);

          if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
          fastEndTime.setHours(fastEndTime.getHours() + dur.getHours());
          fastEndTime.setMinutes(fastEndTime.getMinutes() + dur.getMinutes());
          let eatEndTime = new Date(d1);
          eatEndTime.setHours(eatEndTime.getHours() + 24);
          if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
          if (this.resources.IS_DEBUG_MODE) console.log(eatEndTime);

          if (d2 < fastEndTime) {
            // Still in fasting time
            let diff = new Date(d2.getTime() - d1.getTime());
            let totalSecs = this.getTotalSeconds({
              hours: dur.getHours(),
              minutes: dur.getMinutes(),
              seconds: 0
            });
            let elapsedSecs = Math.floor(diff.getTime() / 1000)
            //this.percent = ((totalSecs - elapsedSecs) / totalSecs) * 100;
            let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
            this.status = this.fastTime;
            this.status.hours = remainingTime.hours;
            this.status.minutes = remainingTime.minutes;
            this.status.seconds = remainingTime.seconds;
            this.isPlay = false;
            this.initialSeconds = totalSecs;
            if (this.resources.IS_DEBUG_MODE) console.log("Here");
            this.setTitle();
            this.startStage();
            this.didReOpen = false;
          }
          else if (d2 > fastEndTime && d2 < eatEndTime) {
            let totalSecs = Math.floor((eatEndTime.getTime() - fastEndTime.getTime()) / 1000);
            let diff = d2.getTime() - fastEndTime.getTime();
            let elapsedSecs = Math.floor(diff / 1000); //86330
            let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
            this.status = this.eatTime;
            this.status.hours = remainingTime.hours;
            this.status.minutes = remainingTime.minutes;
            this.status.seconds = remainingTime.seconds;
            this.isPlay = false;
            this.initialSeconds = totalSecs;
            if (this.resources.IS_DEBUG_MODE) console.log("Here");
            this.statusName = "eat";
            this.setTitle();
            this.startStage();
          }
          else {
            if (this.resources.IS_DEBUG_MODE) console.log("Here in else")
            this.resources.addCompletedFast(
              new CompletedFast(null, this.resources.getChosenFast(),
                this.fastStartTime.toISOString(),
                null,
                null));
            this.resetTimer();
            // this.storage.deleteFastStartTime();
          }
        }
        // });
      }
    })
    // this.storage.getFastStartTime().then((res) => {
    //   if (res) {
    //     this.fastStartTime = new Date(JSON.parse(res));
    //     this.didReOpen = true;
    //     let d1 = new Date(JSON.parse(res));
    //     let d2 = new Date();
    //     this.storage.getChosenFast().then((chosenFast) => {
    //       if (chosenFast) {
    //         if (this.resources.IS_DEBUG_MODE) console.log(chosenFast);
    //         let cf = JSON.parse(chosenFast);
    //         this.resources.setChosenFast(new Fast(cf.title, cf.duration, cf.description, cf.IsPredefined));
    //         //cf = new Fast(cf.getTitle(), cf.getDuration(), cf.getDescription(), cf.getIsPreDefined());
    //         let dur = new Date(cf.duration);
    //         let fastEndTime = new Date(d1);

    //         if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
    //         fastEndTime.setHours(fastEndTime.getHours() + dur.getHours());
    //         fastEndTime.setMinutes(fastEndTime.getMinutes() + dur.getMinutes());
    //         let eatEndTime = new Date(d1);
    //         eatEndTime.setHours(eatEndTime.getHours() + 24);
    //         if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
    //         if (this.resources.IS_DEBUG_MODE) console.log(eatEndTime);

    //         if (d2 < fastEndTime) {
    //           // Still in fasting time
    //           let diff = new Date(d2.getTime() - d1.getTime());
    //           let totalSecs = this.getTotalSeconds({
    //             hours: dur.getHours(),
    //             minutes: dur.getMinutes(),
    //             seconds: 0
    //           });
    //           let elapsedSecs = Math.floor(diff.getTime() / 1000)
    //           //this.percent = ((totalSecs - elapsedSecs) / totalSecs) * 100;
    //           let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
    //           this.status = this.fastTime;
    //           this.status.hours = remainingTime.hours;
    //           this.status.minutes = remainingTime.minutes;
    //           this.status.seconds = remainingTime.seconds;
    //           this.isPlay = false;
    //           this.initialSeconds = totalSecs;
    //           if (this.resources.IS_DEBUG_MODE) console.log("Here");
    //           this.setTitle();
    //           this.startStage();
    //           this.didReOpen = false;
    //         }
    //         else if(d2 > fastEndTime && d2 < eatEndTime) {
    //           let totalSecs = Math.floor((eatEndTime.getTime() - fastEndTime.getTime()) / 1000);
    //           let diff = d2.getTime() - fastEndTime.getTime();
    //           let elapsedSecs = Math.floor(diff / 1000); //86330
    //           let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
    //           this.status = this.eatTime;
    //           this.status.hours = remainingTime.hours;
    //           this.status.minutes = remainingTime.minutes;
    //           this.status.seconds = remainingTime.seconds;
    //           this.isPlay = false;
    //           this.initialSeconds = totalSecs;
    //           if (this.resources.IS_DEBUG_MODE) console.log("Here");
    //           this.statusName = "eat";
    //           this.setTitle();
    //           this.startStage();
    //         }
    //         else {
    //           if (this.resources.IS_DEBUG_MODE) console.log("Here in else")
    //           this.resources.addCompletedFast(
    //             new CompletedFast(null, this.resources.getChosenFast(), 
    //             this.fastStartTime,
    //             null,
    //             null));
    //           this.resetTimer();
    //           this.storage.deleteFastStartTime();
    //         }
    //       }
    //     });
    //   }
    // })

  }

  ionViewWillEnter() {
    console.log("Timer - ionViewWillEnter");
    this.rest.validateToken().then(res => {
      console.log(res);
      if (res.status != 200) {
        this.navController.navigateBack("/login");
      }
    }, e => {
      console.error(e);
    })
    if (this.resources.IS_DEBUG_MODE) console.log(this.resources.getChosenFast());
    if (this.resources.IS_DEBUG_MODE) console.log(this.didReOpen, this.isPlay);
    if (!this.didReOpen && !this.isPlay && this.resources.getChosenFast()) {
      if (this.resources.IS_DEBUG_MODE) console.log(this.status);
      let chosen = this.resources.getChosenFast();
      let duration = new Date(chosen.getDuration());
      if (this.resources.IS_DEBUG_MODE) console.log(duration);
      if (this.resources.IS_DEBUG_MODE) console.log(new Date(duration));
      this.fastTime.hours = duration.getHours();
      this.fastTime.minutes = duration.getMinutes();
      this.fastTime.seconds = 0;
      this.setTitle();
      this.initialSeconds = this.getTotalSeconds(this.fastTime);
      //this.percent = this.getCurrentpercent();
    }
    if (this.resources.IS_DEBUG_MODE) console.log(window.screen);
  }

  ngOnInit() {
    console.log("Timer - ngOnInit");
    if (this.didReOpen) return;
    this.isPlay = false;
    this.percent = 100;
    this.status = this.fastTime;
    this.statusName = "fast";
    this.setTitle();
  }

  getTotalSeconds(obj) {
    return (3600 * obj.hours) + (60 * obj.minutes) + obj.seconds;
  }

  getTimeData(secs) {
    return {
      hours: Math.floor(secs / 3600),
      minutes: Math.floor((secs % 3600) / 60),
      seconds: secs % 60
    }
  }

  setTitle() {
    this.titleText = "" + ((this.status.hours < 10) ? ("0" + this.status.hours) : this.status.hours)
      + ":"
      + ((this.status.minutes < 10) ? ("0" + this.status.minutes) : this.status.minutes)
      + ":"
      + ((this.status.seconds < 10) ? ("0" + this.status.seconds) : this.status.seconds);
  }

  resetTimer() {
    this.resources.setTimerInfo({}, "")
    this.didReOpen = false;
    this.percent = 100;
    this.fastTime.hours = this.fastTime.minutes = this.fastTime.seconds = 0;
    this.eatTime.hours = this.eatTime.minutes = this.eatTime.seconds = 0;
    this.status = this.fastTime;
    this.setTitle();
    this.isPlay = false;
    this.statusName = "fast";
    clearInterval(this.interval);
    this.interval = null;
    this.resources.setChosenFast(null);
  }


  stopTimer() {
    this.percent = 0;
    this.isPlay = false;
    clearInterval(this.interval);
    this.interval = null;
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

  startStage() {
    if (!this.didReOpen && !this.resources.getChosenFast()) {
      this.presentToast("Please Choose a Fast before starting");
      return;
    }
    this.percent = this.getCurrentpercent();
    if (this.resources.IS_DEBUG_MODE) console.log(this.percent);
    if (this.status.hours == 0 && this.status.minutes == 0 && this.status.seconds == 0)
      return
    if (this.resources.IS_DEBUG_MODE) console.log(this.interval);
    if (this.interval) {
      this.isPlay = !this.isPlay;
      this.resetTimer();
      // this.storage.deleteChosenFast();
      // this.storage.deleteFastStartTime();
    }
    else {
      if (!this.didReOpen) {
        if (this.statusName == "fast") {
          this.fastStartTime = new Date();
          // this.storage.saveFastStartTime(this.fastStartTime);
          // this.storage.saveChosenFast(this.resources.getChosenFast());
          let cf = this.resources.getChosenFast() 
          this.resources.setTimerInfo(cf, this.fastStartTime)
          console.log(cf)
          let time = {
            hours: cf.getDuration().getHours(),
            minutes: cf.getDuration().getMinutes(),
            seconds: 0
          }
          this.notif.makeNotifications(new Date(this.fastStartTime.getTime() + (this.getTotalSeconds(time)*1000)), "Fasting Period Complete", 1)  
          this.notif.makeNotifications(new Date(this.fastStartTime.getTime() + (86400 * 1000)), "Fast Complete",  2)  
        }
        else {
          this.eatStartTime = new Date();
        }
      }
      this.interval = setInterval(() => {
        if (this.status.seconds == 0) {
          this.status.seconds = 59;
          if (this.status.minutes == 0) {
            this.status.minutes = 59;
            this.status.hours -= 1;
          }
          else {
            this.status.minutes -= 1;
          }
        }
        else {
          this.status.seconds -= 1;
        }
        this.percent = this.getCurrentpercent();
        this.setTitle();
        if (this.status.hours == 0 && this.status.minutes == 0 && this.status.seconds == 0) {
          if (this.statusName === "fast") {
            this.startEat();
          }
          else {
            this.eatEndTime = new Date();
            this.stopTimer();
            let cf = new CompletedFast(null, this.resources.getChosenFast(),
              this.fastStartTime,
              this.eatStartTime,
              this.eatEndTime);
            this.resources.addCompletedFast(cf).then(() => {
              // this.storage.deleteFastStartTime();
              // this.storage.deleteChosenFast();
              this.resetTimer();
            })
          }
        }
      }, 1000);
      this.isPlay = !this.isPlay;
    }
  }

  startEat() {
    this.isPlay = !this.isPlay;
    clearInterval(this.interval);
    this.interval = null;
    this.status = this.eatTime;
    this.statusName = "eat";
    let chosen = this.resources.getChosenFast();
    if (this.resources.IS_DEBUG_MODE) console.log(chosen);
    let duration = new Date(chosen.getDuration());
    this.getEatTime(duration.getHours(), duration.getMinutes());
    this.initialSeconds = this.getTotalSeconds(this.eatTime);
    this.percent = this.getCurrentpercent();
    this.setTitle();
    this.startStage();
  }

  getCurrentpercent() {
    let current = this.getTotalSeconds(this.status);
    let currentPercent = (current / this.initialSeconds) * 100;
    return currentPercent;
  }

  getEatTime(hours, minutes) {
    this.eatTime.hours = (minutes > 0) ? 24 - hours - 1 : 24 - hours;
    this.eatTime.minutes = (minutes > 0) ? 60 - minutes : minutes;
    this.eatTime.seconds = 0;
  }



}
