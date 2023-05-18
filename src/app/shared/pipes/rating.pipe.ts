import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number): string {
    const numberValue : number = Math.round(value);
    return `${numberValue * 2}/10`;
  }

}
