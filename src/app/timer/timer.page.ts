import { Component, OnInit } from '@angular/core';
import { ResourcesService, Fast, CompletedFast } from '../shared/resources.service';
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
  status: any;
  statusName: string;
  fastStartTime: Date;
  eatStartTime: Date;
  eatEndTime: Date;
  constructor(private resources: ResourcesService) {
   }

   ionViewWillEnter() {
    if(!this.isPlay && this.resources.getChosenFast()) {
      console.log(this.status);
      let chosen = this.resources.getChosenFast();
      let duration = new Date(chosen.getDuration());
      console.log(duration);
      console.log(new Date(duration));
      this.fastTime.hours = duration.getHours();
      this.fastTime.minutes = duration.getMinutes();
      this.fastTime.seconds = 0;
      this.setTitle();
      this.initialSeconds = this.getTotalSeconds(this.fastTime);
      //this.percent = this.getCurrentpercent();
    }
    console.log(window.screen);
   }

  ngOnInit() {
    this.isPlay = false;
    this.percent = 100;
    this.status = this.fastTime;
    this.statusName = "fast";
    this.setTitle();
  }

  getTotalSeconds(obj) {
    return (3600 * obj.hours) + (60 * obj.minutes) + obj.seconds;
  }

  setTitle() {
    this.titleText = "" + ((this.status.hours < 10) ? ("0" + this.status.hours) : this.status.hours)
                         + ":" 
                         + ((this.status.minutes < 10) ? ("0" + this.status.minutes) : this.status.minutes)
                         + ":"
                         + ((this.status.seconds < 10) ? ("0" + this.status.seconds) : this.status.seconds);
  }
  
  resetTimer() {
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

  startStage() {
    if(!this.resources.getChosenFast()) 
      return;
    this.percent = this.getCurrentpercent();
    if(this.status.hours == 0 && this.status.minutes == 0 && this.status.seconds == 0)
      return
    console.log(this.interval);
    if(this.interval) {
      this.isPlay = !this.isPlay;
      this.resetTimer();
    }
    else {
      if(this.statusName == "fast") {
        this.fastStartTime = new Date();
      }
      else {
        this.eatStartTime = new Date();
      }
      this.interval = setInterval(() => {
        if(this.status.seconds == 0) {
          this.status.seconds = 59;
          if(this.status.minutes == 0) {
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
        if(this.status.hours == 0 && this.status.minutes == 0 && this.status.seconds == 0) {
          if(this.statusName === "fast")
            this.startEat();
          else {
            this.eatEndTime = new Date();
            this.stopTimer();
            let cf = new CompletedFast(this.resources.getChosenFast(), 
                                       this.fastStartTime,
                                       this.eatStartTime,
                                       this.eatEndTime);
            this.resources.addCompletedFast(cf);
            this.resetTimer();
          }
        }
      }, 0.1);
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
    this.eatTime.hours = (minutes > 0) ? 2 - hours - 1 : 2 - hours;
    this.eatTime.minutes = (minutes > 0) ? 60 - minutes : minutes;
    this.eatTime.seconds = 0; 
  }

  

}
