import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overHundred',
})
export class OverHundredPipe implements PipeTransform {
  transform(value: string) {
    if (parseInt(value) > 100) return '99+';
    return value;
  }
}
