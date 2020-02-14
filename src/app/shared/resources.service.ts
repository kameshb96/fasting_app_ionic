import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private fasts: Array<Fast> = [];
  private chosenFast: Fast;
  constructor(private storage: StorageService) {
    this.fasts.push(new Fast("16:8 Fast", new Date("2020-02-13T16:00:58.404-05:00"), "16 Hour Fast followed by an 8 hour eating window asjufbasiufasFOUIGASioufdg"));
    this.fasts.push(new Fast("12:12 Fast", new Date("2020-02-13T12:00:03.098-05:00"), "12 Hour Fast followed by a 12 hour eating window"));
    this.storage.updateFasts(this.fasts);
   }

   setChosenFast(fast: Fast) {
    this.chosenFast = fast;
   }

   getChosenFast() {
     return this.chosenFast;
   }

   getFasts() {
     return this.fasts;
   }

  addFast(fastTime, fastTitle, description) {
    let fast = new Fast(fastTitle, fastTime, description);
    this.fasts.push(fast);
    this.storage.addFast(fast);
  }
}

export class Fast {
  private title: string;
  private duration: Date;
  private description: string;

  constructor(title, duration, description) {
    this.title = title;
    this.duration = duration;
    this.description = description;
  }

  getDuration() {
    return this.duration;
  }

  getTitle() {
    return this.title;
  }
}

