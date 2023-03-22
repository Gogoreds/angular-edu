import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-single',
  template: `
    <div class="container">
      <app-product-form [product]="product" (create)="onCreate($event)"></app-product-form>
    </div>
  `,
  styles: [
  ]
})
export class ProductSingleComponent {
  product!: Product;

  ngOnInit(): void {
    this.product = {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 129,
        promo: 'limited',
        description: 'This is just-chocolate.',
      };
    }

    onCreate(product: Product) {
      console.log('onCreate', product);
    }

}
