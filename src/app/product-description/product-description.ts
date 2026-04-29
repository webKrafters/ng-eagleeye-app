import { Component, effect, inject } from '@angular/core';
import {
  provideStreamService,
  StreamService
} from '@webkrafters/ng-eagleeye';

import { defaultDemoState } from '../../context-data';

const selectorMap = { c: 'color', t: 'type' } as const;

type MyStreamService = StreamService<
  typeof defaultDemoState,
  typeof selectorMap
>;

@Component({
  selector: 'app-product-description',
  providers: [ provideStreamService({ selectorMap }) ],
  standalone: true,
  templateUrl: './product-description.html'
})
export class ProductDescription {
	data : MyStreamService[ "data" ];
	streamService = inject<MyStreamService>( StreamService );
	constructor(){
		this.data = this.streamService.data;
		effect(() => console.log( 'ProductDescription component rendered.....' ));
	}
}
