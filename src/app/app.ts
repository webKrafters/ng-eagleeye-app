import { Component, input, signal } from '@angular/core';

import { NgOptimizedImage } from '@angular/common';

import { Prehooks } from '@webkrafters/eagleeye';

import { Product } from './product/product';

import { defaultDemoState } from '../context-data';

@Component({
  imports: [
    NgOptimizedImage,
    Product
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.scss',
  templateUrl: './app.html'
})
export class App {

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

  productType = signal<string>( 'Calculator' );

  protected readonly title = '@webkrafters/ng-eagleeye demo';

  year = new Date().getFullYear();

  updateType( e : KeyboardEvent ) {
    this.productType.set( ( e.target as HTMLInputElement ).value );
  }
}

  



