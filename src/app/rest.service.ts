import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
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
