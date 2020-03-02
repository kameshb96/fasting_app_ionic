import { Injectable, ɵConsole } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { CompletedFast, Fast } from './shared/resources.service';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private logs: Array<any>;
  private fasts: Array<any>;
  private completedFasts: Array<CompletedFast>;
  constructor() { 
    this.fasts = [];
    this.logs = [];
    this.completedFasts = [];
    this.getFastList().then( (res:any) => {
      if(res) {
        console.log(res)
        this.fasts = JSON.parse(res)
      }
    });
    this.getLogHistory().then ((res: any) => {
      if(res) {
        console.log(res);
        this.logs = JSON.parse(res);
      }
    });
    this.getFastHistory().then ((res: any) => {
      if(res)
        this.completedFasts = JSON.parse(res);
    });
    // this.getFastHistory().then ((res: any) => {
    //   console.log(res);
    //   let history = JSON.parse(res);
    //   for(let i = 0; i < history.length; i++) {
    //     let fast = new Fast(history[i].fast.title, history[i].fast.duration, history[i].fast.description);
    //     let cf = new  CompletedFast(fast, history[i].fastStartTime,  history[i].eatStartTime,  history[i].eatEndTime);
    //     this.completedFasts.push(cf);
    //   }
    //   console.log(this.completedFasts[0]);
    //   console.log(this.completedFasts[0].getDetails());
    // });
    // this.fasts = this.getItem("fasts") ? JSON.parse(this.getCustomItem("fasts"))
    // this.getItem("fasts").then((obj:any) => {
    //   console.log(obj);
    //   this.fasts = JSON.parse(obj);
    // });
  }

  // JSON "set" example
async setObject() {
  await Storage.set({
    key: 'user',
    value: JSON.stringify({
      id: 1,
      name: 'Max'
    })
  });
}

// JSON "get" example
async getObject() {
  const ret = await Storage.get({ key: 'user' });
  const user = JSON.parse(ret.value);
}

async addLogItem(obj) {
  console.log(JSON.stringify(obj), this.logs);
  this.logs.push(obj);
  this.setItem("logs", JSON.stringify(this.logs));
}

async updateLogs(obj) {
  this.setItem("logs", JSON.stringify(obj));
  this.logs = obj;
  console.log(this.logs);
}

getFasts() {
  return this.fasts;
}

async addFast(obj) {
  console.log(obj)
  console.log(this.fasts);
  this.fasts.push(obj);
  console.log(this.fasts);
  this.setItem("fasts", JSON.stringify(this.fasts));
  // this.getItem("_cap_fasts").then((obj:any) => {
  //   console.log(obj);
  //   this.fasts = JSON.parse(obj);
  // });
}

async updateFasts(obj) {
  this.setItem("fasts", JSON.stringify(obj));
  this.fasts = obj;
  console.log(this.fasts);
}

deleteFast(index) {
  this.fasts.splice(index-3,1);
  console.log(this.fasts);
  this.setItem("fasts", JSON.stringify(this.fasts));
}

async addCompletedFast(obj: CompletedFast) {
  console.log(obj);
  this.completedFasts.push(obj);
  console.log(this.completedFasts);
  this.setItem("completedFasts",  JSON.stringify(this.completedFasts));
}

deleteCompletedFast(index) {
  this.completedFasts.splice(index,1);
  this.setItem("completedFasts",  JSON.stringify(this.completedFasts));
}

getCompletedFast() {
  return this.completedFasts;
}

getFoodLogs() {
  //console.log(this.logs);
  return this.logs;
}

async getFastList(){
  const { value } = await Storage.get({ key: "fasts"});
  console.log('Got item: ', value);
  return value;
}

async getFastHistory() {
  const { value } = await Storage.get({ key: "completedFasts"});
  console.log('Got item: ', value);
  return value;
}

async getLogHistory(){
  const { value } = await Storage.get({ key: "logs"});
  console.log('Got item: ', value);
  return value;
}

async setItem(k, v) {
  await Storage.set({
    key: k,
    value: v
  });
}

async getItem(k) {
  const { value } = await Storage.get({ key: k });
  console.log('Got item: ', value);
}
 
getCustomItem(k) {
  return Storage.get({ key: k });
}

// async removeItem() {
//   await Storage.remove({ key: 'name' });
// }

// async keys() {
//   const { keys } = await Storage.keys();
//   console.log('Got keys: ', keys);
// }

// async clear() {
//   await Storage.clear();
// }
}
