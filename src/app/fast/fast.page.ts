import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast',
  templateUrl: './fast.page.html',
  styleUrls: ['./fast.page.scss'],
})
export class FastPage implements OnInit {
  isPlay: boolean;
  constructor() {
    this.isPlay = false;
   }

  ngOnInit() {
  }

  startTime() {
    this.isPlay = !this.isPlay;
  }

}
