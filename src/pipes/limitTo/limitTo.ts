import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo',
})
export class LimitToPipe implements PipeTransform {

  transform(value: string, length: number) {
    if (value.length < length) {
      return value;
    }
    return value.substr(0, length) + '...';
  }
}
