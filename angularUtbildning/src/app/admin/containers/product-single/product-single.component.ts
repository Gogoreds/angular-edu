import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/admin/services/product.service';
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

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const id = 'y8z0As';
    this.product = this.productService.products.find((product: Product) => product.id === id) || { name: '', icon: '', price: 0, description: '' };
  }

    onCreate(product: Product) {
      console.log('onCreate', product);
    }

}
