import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private logs: Array<any>;
  private fasts: Array<any>;
  constructor() { 
    this.logs = [];
    this.fasts = [];
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
  this.logs.push(obj);
  this.setItem("logs", JSON.stringify(this.logs));
}

getFasts() {
  return this.fasts;
}

async addFast(obj) {
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
