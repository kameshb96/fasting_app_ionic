import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.page.html',
  styleUrls: ['./fast.page.scss'],
})
export class FastPage implements OnInit {
  isPlay: boolean;
  percent: number;
  interval: any;
  constructor() {
    this.isPlay = false;
    this.percent = 100;
   }

  ngOnInit() {
  }

  resetTime() {
    this.percent = 100;
    this.isPlay = false;
    clearInterval(this.interval);
    this.interval = null;
  }

  startTime() {
    this.isPlay = !this.isPlay;
    if(this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    else {
      this.interval = setInterval(() => {
        this.percent -= 1;
      }, 100);
    }
  }
}
