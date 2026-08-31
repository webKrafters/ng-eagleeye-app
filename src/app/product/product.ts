import { Component, computed, inject } from '@angular/core';

import { Changes, StreamService, provideStreamService } from '@webkrafters/ng-eagleeye';

import { defaultDemoState } from '../../context-data';

import { Editor } from '../editor/editor';
import { TallyDisplay } from '../tally-display/tally-display';
import { PriceSticker } from '../price-sticker/price-sticker';
import { ProductDescription } from '../product-description/product-description';

type State = Partial<typeof defaultDemoState>;

const clientId = 'PRODUCT';
const selectorMap = { p: 'price' } as const;

@Component({
  imports: [
    Editor,
    PriceSticker,
    ProductDescription,
    TallyDisplay
  ],
  providers: [ provideStreamService({ clientId, selectorMap }) ],
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.html'
})
export class Product {

  streamService = inject<StreamService<
    State, typeof selectorMap
  >>( StreamService );

  price = computed(() => {
    const pVal = this.streamService.data.p();
    return this.isNonZeroFalsy( pVal as number ) ? '' : pVal;
  });

  overridePricing( e : KeyboardEvent ) {
    const price = ( e.target as HTMLInputElement ).value;
    !this.isNonZeroFalsy( price ) && this.streamService.setState({
      price: Number( price )
    } as Changes<State> )
  }

  private isNonZeroFalsy( val : string ) : boolean;
  private isNonZeroFalsy( val : number ) : boolean;
  private isNonZeroFalsy( val : any ) : boolean {
    return !val && val !== 0 && val !== '0';
  }
}
