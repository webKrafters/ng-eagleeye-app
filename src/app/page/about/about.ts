import { Component, inject } from '@angular/core';
import {
  provideStreamService,
  StreamService
} from '@webkrafters/ng-eagleeye';

import { defaultDemoState } from '../../../context-data';

import { ProductDescription } from '../../product-description/product-description';
import { Reset } from '../../reset/reset';

const clientId = 'ABOUT PAGE';
const selectorMap = { type: 'type' } as const;

type MyStreamService = StreamService<
  typeof defaultDemoState,
  typeof selectorMap
>;

@Component({
	imports: [ ProductDescription, Reset ],
	providers: [ provideStreamService({ clientId, selectorMap }) ],
	selector: 'app-about-page',
  	standalone: true,
  	template: `
		<div class="about">
			<h1>A bit about {{ data.type() }}</h1>
			<app-product-description />
			<div style="margin-top: 2rem">
				<app-reset /> entirely from here!
			</div>
		</div>
	`
})
export class AboutPage {
	data : MyStreamService[ "data" ];
	streamService = inject<MyStreamService>( StreamService );
	constructor(){
		this.data = this.streamService.data;
	}
}
