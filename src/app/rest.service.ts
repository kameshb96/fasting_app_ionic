import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) {

   }

   public getNutritionixData(query){
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

}
