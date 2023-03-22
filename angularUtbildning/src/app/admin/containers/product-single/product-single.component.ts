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
    this.product = this.productService.readOne('y8z0As')
  }

    onCreate(product: Product) {
      console.log('onCreate', product);
    }

}
