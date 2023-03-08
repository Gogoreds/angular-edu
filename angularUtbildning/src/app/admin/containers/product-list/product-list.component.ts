import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <div>
      <div>
        <!-- {{ product | json }} -->
        {{ product.name }} 
        {{ product.price }} 
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ProductListComponent {
  product!: any;
  products!: any[];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        id: '1',
        name: 'Product 1',
        icon: 'Product 1',
        price: 100,
        description: 'This is product 1',
      },
      {
        id: '2',
        name: 'Product 2',
        icon: 'Product 2',
        price: 130,
        description: 'This is product 2',
      },
      {
        id: '3',
        name: 'Product 3',
        icon: 'Product 3',
        price: 150,
        description: 'This is product 3',
      }
    ];

    this.product = this.products[0];

  }
}
