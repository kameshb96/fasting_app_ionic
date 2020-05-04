import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
import { Fast } from './shared/resources.service';
const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class RestService {
  isProd = true
  url = "http://localhost:3500"
  constructor(
    private httpClient: HttpClient) {
      if(this.isProd) { 
        this.url = "https://fastserver.herokuapp.com:443"
      }
    }

  public getNutritionixData(query) {
    return this.httpClient.get(`${this.url}/search?q=${encodeURIComponent(query)}&qty=100`);
  }

  public login(loginUsername, loginPassword) {
    let tmp = `${this.url}/login`
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

  async logout() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/logout`
    return fetch(tmp, {
      method: 'PUT',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(b)
    })
  }

  public register(loginUsername, loginPassword) {
    let tmp = `${this.url}/register`
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
    let tmp = `${this.url}/Fast`
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
    let tmp = `${this.url}/fasts`
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
    let tmp = `${this.url}/fast`
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

  async deleteLog(identifier) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/log`
    return fetch(tmp, {
      method: 'DELETE',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: identifier
      })
    })
  }

  async addLog(log) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/log`
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
    let tmp = `${this.url}/logs`
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(log)
    })
  }

  async addCompletedFast(completedFast) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/completedFast`
    return fetch(tmp, {
      method: 'POST',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(completedFast)
    })
  }

   async getCompletedFasts() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/completedFasts`
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(log)
    })
  }

  async deleteCompletedFast(identifier) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/completedFast`
    return fetch(tmp, {
      method: 'DELETE',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: identifier
      })
    })
  }

  async setTimerInfo(obj) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/timerinfo`
    return fetch(tmp, {
      method: 'PUT',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chosenFast: obj.chosenFast,
        fastStartTime: obj.fastStartTime
      })
    })
  }

  async getTimerInfo() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/timerinfo` 
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({
      //   chosenFast: obj.chosenFast,
      //   fastStartTime: obj.fastStartTime
      // })
    })
  }
  

  async validateToken() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/validateToken`
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(b)
    })
  }

  async getPassword() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/password`
    return fetch(tmp, {
      method: 'GET',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(b)
    })
  }

  async changePassword(newPassword) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/password`
    let b = {
      'newPassword': newPassword
    }
    return fetch(tmp, {
      method: 'PUT',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(b)
    })
  }

  async updateSettings(settings) {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/settings`
    return fetch(tmp, {
      method: 'PUT',
      headers: {
        'sessionToken': value,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(settings)
    })
  }

  async getSettings() {
    const { value } = await Storage.get({ key: "sessionToken"});
    let tmp = `${this.url}/settings`
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
