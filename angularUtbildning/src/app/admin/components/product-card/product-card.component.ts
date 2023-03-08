import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  template: `
      <div class="product-card">
        <img src="/assets/img/{{ product.icon }}.svg" [alt]="product.name" class="product-card-icon">
        <div>
           <p class="product-card-name">{{ product.name }} </p>
           <p class ="product-card-price">{{ product.price }} </p>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class ProductCardComponent {
  @Input() product!: Product;
  constructor() { }
}
