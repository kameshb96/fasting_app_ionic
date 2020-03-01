import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!(value instanceof Date)) value = new Date(value); 
    let date = value.toLocaleDateString()
    let time = value.toLocaleTimeString()
    time = time.substring(0,time.length-6) + " " + time.substr(time.length-2, 2)
    return date + " " + time;
  }

}
