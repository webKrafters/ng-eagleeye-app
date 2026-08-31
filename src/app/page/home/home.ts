import { Component } from '@angular/core';
import { Product } from '../../product/product';

@Component({
  imports: [ Product ],
  selector: 'app-home-page',
  standalone: true,
  template: `<app-product />`
})
export class HomePage {}
