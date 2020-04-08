import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../shared/resources.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private resources: ResourcesService) { }

  ngOnInit() {
  }

  logout() {
    this.resources.logout()
  }

}
