import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private fasts: Array<Fast> = [];
  constructor() {
    this.fasts.push(new Fast("16:8 Fast", 16, "16 Hour Fast followed by an 8 hour eating window asjufbasiufasFOUIGASioufdg"));
    this.fasts.push(new Fast("12:12 Fast", 12, "12 Hour Fast followed by a 12 hour eating window"));
   }

   getFasts() {
     return this.fasts;
   }

  addFast(fastTime, fastTitle, description) {
    let fast = new Fast(fastTitle, fastTime, description);
    this.fasts.push(fast);
  }
}

export class Fast {
  private title: string;
  private duration: number;
  private description: string;

  constructor(title, duration, description) {
    this.title = title;
    this.duration = duration;
    this.description = description;
  }

  getTitle() {
    return this.title;
  }
}

