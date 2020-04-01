import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
import { Fast } from './shared/resources.service';
const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private httpClient: HttpClient) {}

  public getNutritionixData(query) {
    return this.httpClient.get(`http://localhost:3500/search?q=${encodeURIComponent(query)}&qty=100`);
  }

  public login(loginUsername, loginPassword) {
    let tmp = 'http://localhost:3500/login'
    let b = {
      username: loginUsername,
      password: loginPassword
    }
    return fetch(tmp, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(b)
    })
  }

  public register(loginUsername, loginPassword) {
    let tmp = 'http://localhost:3500/register'
    let b = {
      username: loginUsername,
      password: loginPassword
    }
    return fetch(tmp, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(b)
    })
  }

  async addFast(fast: Fast) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = 'http://localhost:3500/Fast'
    let b = {
      title: fast.getTitle(),
      duration: fast.getDuration(),
      description: fast.getDescription()
    }
    return fetch(tmp, {
      method: 'POST',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(b)
    })
  }

  async getFasts() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = 'http://localhost:3500/fasts'
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(b)
    })
  }

  async deleteFast(identifier) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = 'http://localhost:3500/fast'
    return fetch(tmp, {
      method: 'DELETE',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: identifier
      })
    })
  }

  async addLog(log) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = 'http://localhost:3500/log'
    return fetch(tmp, {
      method: 'POST',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    })
  }

  async getLogs() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = 'http://localhost:3500/logs'
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(log)
    })
  }

  async validateToken() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = 'http://localhost:3500/validateToken'
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(b)
    })
  }

}
