import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  template: `
    <div>
      <ng-container
        *ngIf="products.length; then cards; else nothing"
      ></ng-container>
      <ng-template #cards>
        <app-product-card [product]="products[0]"></app-product-card>
        <app-product-card [product]="products[1]"></app-product-card>
        <app-product-card [product]="products[2]"></app-product-card>
      </ng-template>
      <ng-template #nothing>
        <p>No products here...</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class ProductListComponent {
  products!: Product[];

  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        id: 'y8z0As',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 100,
        description: 'This is just-chocolate',
      },
      {
        id: '3u98Kl',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 130,
        promo: true,
        description: 'This is Glazed Fudge',
      },
      {
        id: 'ae098s',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 150,
        description: 'This is caramel swirl',
      },
    ];
  }
}
