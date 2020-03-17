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

}
