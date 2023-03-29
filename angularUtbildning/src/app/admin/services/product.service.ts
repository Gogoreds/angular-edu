import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product [] = [
    {
      id: 'y8z0As',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 100,
      promo: 'limited',
      description: 'This is just-chocolate.',
    },
    {
      id: '3u98Kl',
      name: 'Glazed Fudge',
      icon: 'glazed-fudge',
      price: 130,
      promo: 'new',
      description: 'This is Glazed Fudge.',
    },
    {
      id: 'ae098s',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 150,
      description: 'This is caramel swirl.',
    },
    {
      id: 'ag0858',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 120,
      description: 'For the sour advocate.',
    },
    {
      id: 'KL698s',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 139,
      description: 'Delicious lucious lemon.',
    }
  ];

  constructor() { }

  read() {
    return this.products;
  }

  readOne(id: string) {
    const product = this.read().find((product: Product) => product.id === id );
    if (product) {
      return product;
    }
    return { id: '', name: '', icon: '', price: 0, description: ''};
  }

  create(payload: Product) {
    this.products = [...this.products, payload];
    console.log(this.products);
  }

  update(payload: Product) {
    this.products = this.products.map((product: Product) => {
      if (product.id === payload.id) {
        return payload;
      }
      return product;
    });
    console.log(this.products);
  }
}

