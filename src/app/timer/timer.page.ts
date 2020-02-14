import { Component, OnInit } from '@angular/core';
import { ResourcesService, Fast } from '../shared/resources.service';
import { PopoverController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
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
  constructor(private resources: ResourcesService) {
    this.isPlay = false;
    this.percent = 100;
    this.setTitle();
   }

   ionViewWillEnter() {
    if(this.resources.getChosenFast()) {
      let chosen = this.resources.getChosenFast();
      let duration = new Date(chosen.getDuration());
      console.log(duration);
      console.log(new Date(duration));
      this.fastTime.hours = duration.getHours();
      this.fastTime.minutes = duration.getMinutes();
      this.fastTime.seconds = 0;
      this.setTitle();
      this.initialSeconds = this.getTotalSeconds(this.fastTime);
      this.percent = this.getCurrentpercent();
    }
   }

  ngOnInit() {}

  getTotalSeconds(obj) {
    return (3600 * obj.hours) + (60 * obj.minutes) + obj.seconds;
  }

  setTitle() {
    this.titleText = "" + ((this.fastTime.hours < 10) ? ("0" + this.fastTime.hours) : this.fastTime.hours)
                         + ":" 
                         + ((this.fastTime.minutes < 10) ? ("0" + this.fastTime.minutes) : this.fastTime.minutes)
                         + ":"
                         + ((this.fastTime.seconds < 10) ? ("0" + this.fastTime.seconds) : this.fastTime.seconds);
  }
  
  resetTimer() {
    this.percent = 100;
    this.fastTime.hours = this.fastTime.minutes = this.fastTime.seconds = 0;
    this.setTitle();
    this.isPlay = false;
    clearInterval(this.interval);
    this.interval = null;
  }


  stopTimer() {
    this.percent = 0;
    this.isPlay = false;
    clearInterval(this.interval);
    this.interval = null;
  }

  startFast(obj) {
    if(this.fastTime.hours == 0 && this.fastTime.minutes == 0 && this.fastTime.seconds == 0)
      return;
    if(this.interval) {
      this.isPlay = !this.isPlay;
      this.resetTimer();
    }
    else {
      this.interval = setInterval(() => {
        if(this.fastTime.seconds == 0) {
          this.fastTime.seconds = 59;
          if(this.fastTime.minutes == 0) {
            this.fastTime.minutes = 59;
            this.fastTime.hours -= 1;
          }
          else {
            this.fastTime.minutes -= 1;
          }
        }
        else {
          this.fastTime.seconds -= 1;
        }
        this.percent = this.getCurrentpercent();
        this.setTitle();
        if(this.fastTime.hours == 0 && this.fastTime.minutes == 0 && this.fastTime.seconds == 0)
          this.stopTimer();
      }, 10);
      this.isPlay = !this.isPlay;
    }
  }

  startEat() {
    let chosen = this.resources.getChosenFast();
    let duration = new Date(chosen.getDuration());
    this.eatTime(duration.getHours(), duration.getMinutes());
    this.initialSeconds = this.getTotalSeconds(this.eatTime);
  }

  getCurrentpercent() {
    let current = this.getTotalSeconds(this.fastTime);
    let currentPercent = (current / this.initialSeconds) * 100;
    return currentPercent;
  }

  getEatTime(hours, minutes) {
    this.eatTime.hours = (minutes > 0) ? 24 - hours - 1 : 24 - hours;
    this.eatTime.minutes = (minutes > 0) ? 60 - minutes : minutes;
    this.eatTime.seconds = 0; 
  }

  

}
