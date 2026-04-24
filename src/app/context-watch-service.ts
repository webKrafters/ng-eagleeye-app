import { inject, Injectable, OnDestroy } from '@angular/core';

import { ContextService, Unsubscribe } from '@webkrafters/ng-eagleeye';

@Injectable()
export class ContextWatchService implements OnDestroy {
	private contextService = inject<ContextService>( ContextService );
	unwatch : Unsubscribe = ()=>null;
  watch() {
		console.log( 'on context store mount >>> observer says: OUR CTX REF IS >>>>> ', this.contextService );
		this.unwatch = this.contextService.store.subscribe( 'data-updated', ( ...args ) => console.log(
			'on context state update >>> observer says: UPDATED STATE WITH THE FOLLOWING ARGS >>>>> ',
			...args
		) );
	}
	ngOnDestroy() { this.unwatch() }
}
