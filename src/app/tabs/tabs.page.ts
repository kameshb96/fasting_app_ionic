import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private resources: ResourcesService) {
  }

  ngOnInit() {
    this.resources.isLoggedIn.next(true)
  }       
}
