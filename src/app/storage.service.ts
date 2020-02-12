import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  logs: any = [];
  constructor() { }

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

async removeItem() {
  await Storage.remove({ key: 'name' });
}

async keys() {
  const { keys } = await Storage.keys();
  console.log('Got keys: ', keys);
}

async clear() {
  await Storage.clear();
}
}
