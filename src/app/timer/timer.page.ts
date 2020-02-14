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
  hours: number;
  minutes: number;
  seconds: number;
  initialSeconds: number;
  constructor(private resources: ResourcesService) {
    this.isPlay = false;
    this.percent = 100;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.setTitle();
   }

   ionViewWillEnter() {
    if(this.resources.getChosenFast()) {
      let chosen = this.resources.getChosenFast();
      let duration = new Date(chosen.getDuration());
      console.log(duration);
      console.log(new Date(duration));
      this.hours = duration.getHours();
      this.minutes = duration.getMinutes();
      this.seconds = 0;
      this.setTitle();
      this.initialSeconds = this.getTotalSeconds();
      this.percent = this.getCurrentpercent();
    }
   }

  ngOnInit() {}

  getTotalSeconds() {
    return (3600 * this.hours) + (60 * this.minutes) + this.seconds;
  }

  setTitle() {
    this.titleText = "" + ((this.hours < 10) ? ("0" + this.hours) : this.hours)
                         + ":" 
                         + ((this.minutes < 10) ? ("0" + this.minutes) : this.minutes)
                         + ":"
                         + ((this.seconds < 10) ? ("0" + this.seconds) : this.seconds);
  }
  
  resetTimer() {
    this.percent = 100;
    this.hours = this.minutes = this.seconds = 0;
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

  toggleTimer() {
    if(this.hours == 0 && this.minutes == 0 && this.seconds == 0)
      return;
    if(this.interval) {
      this.isPlay = !this.isPlay;
      this.resetTimer();
    }
    else {
      this.interval = setInterval(() => {
        if(this.seconds == 0) {
          this.seconds = 59;
          if(this.minutes == 0) {
            this.minutes = 59;
            this.hours -= 1;
          }
          else {
            this.minutes -= 1;
          }
        }
        else {
          this.seconds -= 1;
        }
        this.percent = this.getCurrentpercent();
        this.setTitle();
        if(this.hours == 0 && this.minutes == 0 && this.seconds == 0)
          this.stopTimer();
      }, 10);
      this.isPlay = !this.isPlay;
    }
  }

  getCurrentpercent() {
    let current = this.getTotalSeconds();
    let currentPercent = (current / this.initialSeconds) * 100;
    return currentPercent;
  }

}
