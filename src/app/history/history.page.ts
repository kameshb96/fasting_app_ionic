import { Component, OnInit } from '@angular/core';
import { ResourcesService, CompletedFast } from '../shared/resources.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  private completedFasts: Array<any>;

  constructor(private resources: ResourcesService) { }

  ngOnInit() {}

  ionViewWillEnter()  {
    this.completedFasts = this.resources.getCompletedFasts();
    // setTimeout(() => {
    //   let history = this.resources.getCompletedFasts();
    //   history.forEach(e => {
    //     this.completedFasts.push({
    //       title: e.getDetails().fast.getTitle();
    //     })
    //   })
    //   this.completedFasts = this.resources.getCompletedFasts();
    // }, 500);
  }

}
