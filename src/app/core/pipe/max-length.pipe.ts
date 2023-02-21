import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string | undefined, len: number): string {
    if (!value) return '';
    return value.slice(0, len);
  }

}
