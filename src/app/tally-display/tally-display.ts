import { Component, computed, effect, inject, Signal, signal } from '@angular/core';

import isEmpty from 'lodash.isempty';

import { defaultDemoState } from '../../context-data';
import { provideStreamService, StreamService } from '@webkrafters/ng-eagleeye';

import { CapitalizedDisplay } from '../capitalized-display/capitalized-display';
import { CustomerPhoneDisplay } from '../customer-phone-display/customer-phone-display';

import { Reset } from '../reset/reset';
import { TofixedPipe } from '../tofixed-pipe';

const selectorMap = {
  color: 'color',
  name: 'customer.name',
  price: 'price',
  type: 'type'
};

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

  color = this.streamService.data.color as Signal<string>;
  firstName = computed(() => ( this.streamService.data.name() as { first: string } ).first );
  lastName = computed(() => ( this.streamService.data.name() as { last: string } ).last );
  price = this.streamService.data.price as Signal<string>;
  type = this.streamService.data.type as Signal<string>;

  constructor(){
    effect(() => console.log( 'TallyDisplay component rendered.....' ));
  }
  isEmpty( v : unknown ) { return isEmpty( v ) }
}
