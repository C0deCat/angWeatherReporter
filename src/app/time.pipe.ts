import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'toMilliseconds'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 1000;
  }

}
