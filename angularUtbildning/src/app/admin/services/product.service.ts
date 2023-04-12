import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, of, map } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = []; // STATE

  constructor(private http: HttpClient) {}

  read() {
    if (this.products.length) {
      return of(this.products);
    }

    return this.http.get<Product[]>(`/api/products`).pipe(
      tap((products) => {
        this.products = products;
      })
    );
  }

  readOne(id: string) {
    return this.read().pipe(
      map((products) => {
        const product = products.find((product: Product) => product.id === id);
        if (product) {
          return product;
        }
        return { name: '', icon: '', price: 0, description: '' };
      })
    );
  }

  create(payload: Product) {
    return this.http.post<Product>(`/api/products`, payload).pipe(
      tap((product) => {
        this.products = [...this.products, product];
      })
    );
  }

  update(payload: Product) {
    return this.http.put<Product>(`/api/products/${payload.id}`, payload).pipe(
      tap((product) => {
        this.products = this.products.map((item: Product) => {
          if (item.id === product.id) {
            return product;
          }
          return item;
        });
      })
    );
  }

  delete(payload: Product) {
    return this.http.delete<Product>(`/api/products/${payload.id}`).pipe(
      tap(() => {
        this.products = this.products.filter(
          (product: Product) => product.id !== payload.id
        );
      })
    );
  }
}
