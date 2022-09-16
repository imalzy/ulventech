import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whitespace',
})
export class WhitespacePipe implements PipeTransform {
  transform(value: string): number {
    const a: number = value.split(' ').length - 1;
    return a;
  }
}
