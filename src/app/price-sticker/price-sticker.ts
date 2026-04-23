import { Component, effect, inject } from '@angular/core';

import { defaultDemoState } from '../../context-data';
import { provideStreamService, StreamService } from '@webkrafters/ng-eagleeye';
import { TofixedPipe } from '../tofixed-pipe';

const selectorMap = { p: 'price' };

type MyStreamService = StreamService<
  typeof defaultDemoState,
  typeof selectorMap
>;

@Component({
  imports: [ TofixedPipe ],
  selector: 'app-price-sticker',
  providers: [ provideStreamService({ selectorMap }) ],
  standalone: true,
  templateUrl: './price-sticker.html'
})
export class PriceSticker {
  data : MyStreamService[ "data" ];
  streamService = inject<MyStreamService>( StreamService );
  constructor(){
    this.data = this.streamService.data;
    effect(() => console.log( 'PriceSticker component rendered.....' ));
  }
}
