import { Component, effect, inject, input } from '@angular/core';

import { ContextService, Prehooks } from '@webkrafters/ng-eagleeye';

import { defaultDemoState } from '../../context-data';

import { ContextWatchService } from '../context-watch-service';

import { Editor } from '../editor/editor';
import { TallyDisplay } from '../tally-display/tally-display';
import { PriceSticker } from '../price-sticker/price-sticker';
import { ProductDescription } from '../product-description/product-description';

type State = Partial<typeof defaultDemoState>;

@Component({
  selector: 'app-product',
  imports: [
    Editor,
    PriceSticker,
    ProductDescription,
    TallyDisplay
  ],
  providers: [ ContextWatchService ],
  standalone: true,
  templateUrl: './product.html'
})
export class Product {

  contextService = inject<ContextService<State>>( ContextService );
  contextWatchService = inject( ContextWatchService );

  prehooks = input<Prehooks<State>>( undefined as unknown as Prehooks<State> );
  type = input<string>( undefined as unknown as string );

  constructor() {
    this.contextWatchService.watch();
    effect(() => {
      this.contextService.prehooks = this.prehooks();
    });
    effect(() => {
      this.contextService.store.setState({ type: this.type() });
    });
  }

  overridePricing( e : KeyboardEvent ) {
    this.contextService.store.setState({
      price: Number( ( e.target as HTMLInputElement ).value )
    })
  }
}
