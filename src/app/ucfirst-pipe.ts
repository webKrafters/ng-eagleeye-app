import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucfirst',
  standalone: true
})
export class UcfirstPipe implements PipeTransform {

  transform( text: string ) : string {
    if( !text || !text?.length ){ return text }
    return `${ text[ 0 ].toUpperCase() }${ text.length > 1 ? text.slice( 1 ) : '' }`;
  }

}

