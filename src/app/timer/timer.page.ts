import { Component, OnInit } from '@angular/core';
import { ResourcesService, Fast } from '../shared/resources.service';


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
  constructor(private resources: ResourcesService) {
    this.isPlay = false;
    this.percent = 100;
    this.hours = 0;
    this.minutes = 0;
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
      this.setTitle();
    }
   }

  ngOnInit() {}

  setTitle() {
    this.titleText = "" + ((this.hours < 10) ? ("0" + this.hours) : this.hours)
                         + ":" 
                         + ((this.minutes < 10) ? ("0" + this.minutes) : this.minutes);
  }

  stopTimer() {
    this.percent = 100;
    this.isPlay = false;
    clearInterval(this.interval);
    this.interval = null;
  }

  toggleTimer() {
    if(this.interval) {
      this.isPlay = !this.isPlay;
      this.stopTimer();
    }
    else {
      this.interval = setInterval(() => {
        this.percent -= 1;
      }, 100);
      this.isPlay = !this.isPlay;
    }
  }

}
