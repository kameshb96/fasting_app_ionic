import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AutoCompleteService} from '../../node_modules/ionic4-auto-complete';
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
    if (this.resources.IS_DEBUG_MODE) console.log(query)
    if (!query || (typeof query) == "undefined" || query.length <= 3) { return false; }
    return this.restService.getNutritionixData(query).pipe(map(
      (result: any) => {
        if (this.resources.IS_DEBUG_MODE) console.log(result);
        let res = [];
        this.resources.setFoodResult(result.branded)
        for(let i = 0; i < result.branded.length; i++) {
          // search for keywords using AND operator
          let arr = query.split(" ");
          if (this.resources.IS_DEBUG_MODE) console.log(arr);
          let isAllKeywordExist = true;
          for(let z = 0; z < arr.length; z++) {
            if (result.branded[i].brand_name_item_name.toLowerCase().indexOf(arr[z].toLowerCase()) == -1) {
              if (this.resources.IS_DEBUG_MODE) console.log("Keyword not found");
              isAllKeywordExist = false;
              break;
            }
          }
          if (isAllKeywordExist) res.push(result.branded[i].brand_name_item_name);
        }
        if (this.resources.IS_DEBUG_MODE) console.log(res)
        return res
      }
    ));
  }
}
