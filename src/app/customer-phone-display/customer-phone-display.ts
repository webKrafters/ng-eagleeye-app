import { Component, effect, inject } from '@angular/core';
import {
  provideStreamService,
  StreamService
} from '@webkrafters/ng-eagleeye';

import { defaultDemoState } from '../../context-data';

const selectorMap = { phone: 'customer.phone' } as const;

type MyStreamService = StreamService<
  typeof defaultDemoState,
  typeof selectorMap
>;

@Component({
  selector: 'app-customer-phone-display',
  providers: [ provideStreamService({ selectorMap }) ],
  standalone: true,
  templateUrl: './customer-phone-display.html'
})
export class CustomerPhoneDisplay {
  data : MyStreamService[ "data" ];
  streamService = inject<MyStreamService>( StreamService );
  constructor(){
    this.data = this.streamService.data;
    effect(() => console.log( 'CustomerPhoneDisplay component rendered.....' ));
  }
}
