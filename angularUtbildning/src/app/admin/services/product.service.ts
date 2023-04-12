import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  read() {
    return this.http.get<Product[]>(`/api/products`).pipe(
      tap((products) => {
        this.products = products;
      })
    );
  }

  // readOne(id: string) {
  //   const product = this.read().find((product: Product) => product.id === id);
  //   if (product) {
  //     return product;
  //   }
  //   return { id: '', name: '', icon: '', price: 0, description: '' };
  // }

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

  delete(payload: Product) {
    this.products = this.products.filter(
      (product: Product) => product.id !== payload.id
    );
    console.log(this.products);
  }
}
