import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dates'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let today:Date = new Date();
    let todayWithoutTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var daysCount = Math.abs(todayWithoutTime-value)

    var daysCountInSeconds = daysCount*0.001;

    const secondsInADay = 86400;

    var daysCounter = daysCountInSeconds/secondsInADay;

    if(daysCounter >= 1 && value<todayWithoutTime){
      return daysCounter
    }
    else{
      return 0;
    }
  
  }

}
