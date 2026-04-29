import { Component, effect, input } from '@angular/core';
import { UcfirstPipe } from '../ucfirst-pipe';

@Component({
  imports: [ UcfirstPipe ],
  selector: 'app-capitalized-display',
  standalone: true,
  template: '<span>{{ text() | ucfirst }}</span>'
})
export class CapitalizedDisplay {
  text = input<string>( '' );
  constructor() {
    effect(() => console.log( `CapitalizedDisplay( ${ this.text() } ) component rendered.....` ));
  }
}
