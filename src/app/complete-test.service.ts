import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AutoCompleteService} from 'ionic4-auto-complete';
import { EEXIST } from 'constants';
import { RestService } from './rest.service';
import { ResourcesService } from './shared/resources.service';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class CompleteTestService implements AutoCompleteService {
  labelAttribute = 'name';
  formValueAttribute = 'numericCode';

  constructor(private http:HttpClient,
              private restService: RestService,
              private resources: ResourcesService) {
  
  }

  getResults(query:string) {
    console.log(query)
    if (!query || (typeof query) == "undefined" || query.length <= 3) { return false; }
    let res = ['abc']
    this.restService.getNutritionixData(query).subscribe((data: any) => {
      console.log(data)
      this.resources.setFoodResult(data.branded)
      for(let i = 0; i < data.branded.length; i++) {
        res.push(data.branded[i].brand_name_item_name)
      }
      console.log(res)
      return res
    })
    // let arr = ['apples', 'bats', 'camera']
    // return arr.filter((e) => {
    //   return e.toLowerCase().includes(keyword.toLowerCase())
    // })
    // return this.http.get(`http://localhost:3500/search?q=${encodeURIComponent(query)}&qty=100`).pipe(map(
    //     (result: any[]) => {
    //        return result.filter(
    //           (item) => {
    //              return item.name.toLowerCase().startsWith(
    //                 keyword.toLowerCase()
    //              );
    //           }
    //        );
    //     }
    //  ));
  }
}
