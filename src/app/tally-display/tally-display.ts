import { Component, effect, inject } from '@angular/core';

import isEmpty from 'lodash.isempty';

import { defaultDemoState } from '../../context-data';
import { provideStreamService, StreamService } from '@webkrafters/ng-eagleeye';

import { CapitalizedDisplay } from '../capitalized-display/capitalized-display';
import { CustomerPhoneDisplay } from '../customer-phone-display/customer-phone-display';

import { Reset } from '../reset/reset';
import { TofixedPipe } from '../tofixed-pipe';

const selectorMap = {
  color: 'color',
  fName: 'customer.name.first',
  lName: 'customer.name.last',
  price: 'price',
  type: 'type'
} as const;

type State = typeof defaultDemoState;

type MyStreamService = StreamService<
  State, typeof selectorMap
>;

@Component({
  selector: 'app-tally-display',
  imports: [
    TofixedPipe,
    CapitalizedDisplay,
    CustomerPhoneDisplay,
    Reset
  ],
  providers: [ provideStreamService({ selectorMap }) ],
  standalone: true,
  templateUrl: './tally-display.html'
})
export class TallyDisplay {

  streamService = inject<MyStreamService>( StreamService );

	data : MyStreamService[ "data" ];

  isEmpty = isEmpty;
  
  constructor(){
    this.data = this.streamService.data;
    effect(() => console.log( 'TallyDisplay component rendered.....' ));
  }
}
