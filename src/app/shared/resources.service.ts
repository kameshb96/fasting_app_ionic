import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private fasts: Array<Fast> = [];
  private completedFasts: Array<CompletedFast> = [];
  private chosenFast: Fast;
  private foodLogs: Array<any>;
  constructor(private storage: StorageService) {
    this.foodLogs = [];
    this.fasts.push(new Fast("16:8 Fast", new Date("2020-02-13T16:00:58.404-05:00"), "16 Hour Fast followed by an 8 hour eating window"));
    this.fasts.push(new Fast("12:12 Fast", new Date("2020-02-13T12:00:03.098-05:00"), "12 Hour Fast followed by a 12 hour eating window"));
    this.storage.updateFasts(this.fasts);
    //this.completedFasts = this.storage.getCompletedFast();
    this.storage.getFastHistory().then ((res: any) => {
      console.log(res);
      let history = JSON.parse(res);
      if (history) {
        for(let i = 0; i < history.length; i++) {
          let fast = new Fast(history[i].fast.title, history[i].fast.duration, history[i].fast.description);
          let cf = new  CompletedFast(fast, history[i].fastStartTime,  history[i].eatStartTime, history[i].eatEndTime);
          this.completedFasts.push(cf);
        }
      }
    });
    this.storage.getLogHistory().then ((res: any) => {
      let logHistory = [];
      if(res)
        logHistory = JSON.parse(res);
      if(logHistory) {
        logHistory.forEach(log => {
          let d = new Date(log.date);
          let t = new Date(log.time);
          let f =  log.food;
          let q =  log.qty;
          let c = log.cal;
          let u = log.unit;
          this.foodLogs.push({
            date: d,
            time: t,
            food: f,
            qty:  q,
            cal: c,
            unit: u
          });
        });
      }
    });
   }

   setChosenFast(fast: Fast) {
    this.chosenFast = fast;
   }

   getChosenFast() {
     return this.chosenFast;
   }

   getFasts() {
     return this.storage.getFasts();
   }

   getCompletedFasts() {
     return this.completedFasts;
   }

   getFoodLogs() {
     return this.foodLogs;
   }

  addFast(fastTime, fastTitle, description) {
    console.log(this.fasts);
    let fast = new Fast(fastTitle, fastTime, description);
    this.storage.addFast(fast);
  }

  addCompletedFast(obj: CompletedFast) {
    this.storage.addCompletedFast(obj);
    //this.completedFasts = this.storage.getCompletedFast();
    this.completedFasts.push(obj);
  }

  addFoodLog(obj) {
    this.storage.addLogItem(obj); 
    this.foodLogs.push(obj);
    console.log(this.foodLogs);
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

  getDescription() {
    return this.description;
  }

  getDuration() {
    return this.duration;
  }

  getTitle() {
    return this.title;
  }
}

export class CompletedFast {
  private fast: Fast;
  private fastStartTime: any;
  private eatStartTime: any;
  private eatEndTime: any;

  constructor(fast, fastStartTime, eatStartTime, eatEndTime) {
    this.fast = fast;
    this.fastStartTime = fastStartTime;
    this.eatStartTime = eatStartTime;
    this.eatEndTime = eatEndTime;
  }

  public getDetails() {
    return {
      fast: this.fast,
      fastStartTime: this.fastStartTime,
      eatStartTime: this.eatStartTime,
      eatEndTime: this.eatEndTime
    };
  }
}

