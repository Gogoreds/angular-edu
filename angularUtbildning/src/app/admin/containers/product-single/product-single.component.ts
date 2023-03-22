import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-single',
  template: `
    <div class="container">
      <app-product-form (create)="onCreate($event)"></app-product-form>
    </div>
  `,
  styles: [
  ]
})
export class ProductSingleComponent {
  
    onCreate(product: Product) {
      console.log('onCreate', product);
    }

}
