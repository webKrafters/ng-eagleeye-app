import {
  Component,
  effect,
  inject,
  input,
  signal
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router'; // 1. Import directives

import { NgOptimizedImage } from '@angular/common';

import { defaultDemoState } from '../context-data';
import { ContextWatchService } from './context-watch-service';
import { ContextService, Prehooks } from '@webkrafters/ng-eagleeye';

type State = Partial<typeof defaultDemoState>;

@Component({
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  providers: [ ContextWatchService ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.scss',
  templateUrl: './app.html'
})
export class App {

  contextService = inject<ContextService<State>>( ContextService );
  contextWatchService = inject( ContextWatchService );

  prehooks = input<Prehooks<Partial<typeof defaultDemoState>>>({
    resetState( ...args : Array<any> ) {
      console.log( 'prehook says: resetting state with >>>> ', JSON.stringify( args ) );
      return true;
    },
    setState( ...args : Array<any> ) {
      console.log( 'prehook says: merging following into state >>>> ', JSON.stringify( args ) );
      return true;
    }
  });

  productType = signal( '' );

  protected readonly title = '@webkrafters/ng-eagleeye demo';

  year = new Date().getFullYear();

  constructor() {
    this.contextWatchService.watch();
    effect(() => {
      this.contextService.prehooks = this.prehooks();
      this.contextService.store.subscribe(
        "data-updated", ( a, b, netChanges ) => {
          'type' in netChanges && this.productType.set( netChanges[ 'type' ] as string ?? '' )
        }
      );
    });
  }

  updateType( e : KeyboardEvent ) {
    this.contextService.store.setState({
      type: ( e.target as HTMLInputElement ).value
    });
  }
}
