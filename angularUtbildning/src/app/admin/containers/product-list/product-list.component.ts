import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/admin/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  template: `
    <div>
      <ng-container *ngIf="products?.length; else nothing">
        <app-product-card
          *ngFor="let product of products; trackBy: trackById"
          [product]="product"
        ></app-product-card>
      </ng-container>

      <!-- ng-template is used to define a template that has a behavior
       similar to a component. -->

      <!-- <ng-template #cards>
        <app-product-card [product]="products[0]"></app-product-card>
        <app-product-card [product]="products[1]"></app-product-card>
        <app-product-card [product]="products[2]"></app-product-card>
      </ng-template> -->

      <ng-template #nothing>
        <p>No products here...</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class ProductListComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .read()
      .subscribe((products: Product[]) => (this.products = products));
  }

  trackById(index: number, value: Product) {
    return value.id;
  }
}
