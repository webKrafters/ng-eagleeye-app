import { Component, effect, inject } from '@angular/core';

import {
  FULL_STATE_SELECTOR,
  provideStreamService,
  StreamService
} from '@webkrafters/ng-eagleeye';

import { defaultDemoState } from '../../context-data';

@Component({
  selector: 'app-reset',
  providers: [ provideStreamService({ clientId: 'RESET' }) ],
  standalone: true,
  styleUrl: './reset.scss',
  templateUrl: './reset.html'
})
export class Reset {
  streamService = inject<StreamService<
    typeof defaultDemoState,
    null
  >>( StreamService );
  constructor() {
    effect(() => console.log( 'Reset component rendered.....' ));
  }
  reset(){ this.streamService.resetState([ FULL_STATE_SELECTOR ]) }
}
