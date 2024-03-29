import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/admin/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-single',
  template: `
    <div class="container">
      <app-product-form
        [product]="product"
        (create)="onCreate($event)"
        (update)="onUpdate($event)"
        (delete)="onDelete($event)"
      >
      </app-product-form>
    </div>
  `,
  styles: [],
})
export class ProductSingleComponent {
  product!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .readOne('DR7ViI6')
      .subscribe((product: Product) => (this.product = product));
  }

  onCreate(product: Product) {
    this.productService
      .create(product)
      .subscribe(() => console.log('Created!'));
  }

  onUpdate(product: Product) {
    this.productService.update(product).subscribe({
      next: () => console.log('Updated!'),
      error: (err) => console.log('onUpdate error:', err),
    });
  }

  onDelete(product: Product) {
    this.productService
      .delete(product)
      .subscribe(() => console.log('Deleted!'));
  }
}
