import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    this.fasts.push(new Fast("16:8 Fast", new Date("2020-02-13T16:00:58.404-05:00"), "16 Hour Fast followed by an 8 hour eating window", true));
    this.fasts.push(new Fast("12:12 Fast", new Date("2020-02-13T12:00:03.098-05:00"), "12 Hour Fast followed by a 12 hour eating window", true));
    // for demo usage
    this.fasts.push(new Fast("1.30 hrs", new Date("2020-03-01T01:30:44.257+05:30"), "One and an Half hour fast...", true));

    this.storage.getFastList().then((res:any) => {
      if(res) {
        let arr = JSON.parse(res);
        for(let i = 0; i < arr.length; i++)
          this.fasts.push(new Fast(arr[i].title, new Date(arr[i].duration), arr[i].description, arr[i].isPredefined))
      }
    });
    console.log(this.fasts)
    // this.fasts.push(new Fast("A",new Date("2020-03-01T01:14:29.909-05:00"),"1"));
    // this.storage.updateFasts(this.fasts);
    //this.completedFasts = this.storage.getCompletedFast();
    this.storage.getFastHistory().then((res: any) => {
      console.log(res);
      let history = JSON.parse(res);
      if (history) {
        for (let i = 0; i < history.length; i++) {
          let fast = new Fast(history[i].fast.title, history[i].fast.duration, history[i].fast.description, history[i].fast.isPredefined);
          let cf = new CompletedFast(fast, history[i].fastStartTime, history[i].eatStartTime, history[i].eatEndTime);
          this.completedFasts.push(cf);
        }
      }
    });
    this.foodLogs = this.storage.getFoodLogs();
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

  getCompletedFasts() {
    return this.completedFasts;
  }

  getFoodLogs() {
    //  return this.foodLogs;
    return this.storage.getFoodLogs();
  }

  deleteLog(date) {
    this.foodLogs = this.storage.getFoodLogs();
    let d = new Date(date);
    for(let i = 0; i < this.foodLogs.length; i++) {
      let d2 = new Date(this.foodLogs[i].date);
      console.log(d, d2);
      if (d.getTime() == d2.getTime()) {
        this.foodLogs.splice(i, 1);
        this.storage.updateLogs(this.foodLogs);
        return;
      }
    }
  }

  addFast(fastTime, fastTitle, description, isPre) {
    console.log(this.fasts);
    let fast = new Fast(fastTitle, fastTime, description, isPre);
    this.storage.addFast(fast);
    this.fasts.push(fast)
  }

  deleteFast(index) {
    console.log(this.fasts);
    console.log(index);
    this.fasts.splice(index,1);
    console.log(this.fasts);
    this.storage.deleteFast(index);
  }

  addCompletedFast(obj: CompletedFast) {
    this.storage.addCompletedFast(obj);
    //this.completedFasts = this.storage.getCompletedFast();
    this.completedFasts.push(obj);
  }

  addFoodLog(obj) {
    console.log(obj);
    this.storage.addLogItem(obj);
    //this.foodLogs.push(obj);
  }
}

export class Fast {
  private title: string;
  private duration: Date;
  private description: string;
  private isPredefined: Boolean;

  constructor(title, duration, description, isPre) {
    this.title = title;
    this.duration = duration;
    this.description = description;
    this.isPredefined = isPre;
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

  getIsPreDefined() {
    return this.isPredefined;
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

