import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tofixed',
  standalone: true
})
export class TofixedPipe implements PipeTransform {

  transform<T>( numericText: T, digits: number ): unknown {
    try {
      return Number( numericText ).toFixed( digits );
    } catch( e ) {}
    return numericText;
  }

}
