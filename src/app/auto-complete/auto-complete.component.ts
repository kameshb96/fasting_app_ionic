import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { CompleteTestService } from '../complete-test.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent {
  public labelAttribute:string;
  
  public objects:any[];

  constructor(private completeTest: CompleteTestService) {
    this.objects =  []
  }
  
  protected filter(keyword) {
    keyword = keyword.toLowerCase();

    return this.objects.filter(
      (object) => {
        const value = object[this.labelAttribute].toLowerCase();

        return value.includes(keyword);
      }
    );
  }
}
