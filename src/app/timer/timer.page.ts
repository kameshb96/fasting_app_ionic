import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {
  isPlay: boolean;
  percent: number;
  interval: any;
  constructor() {
    this.isPlay = false;
    this.percent = 100;
   }

  ngOnInit() {
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
