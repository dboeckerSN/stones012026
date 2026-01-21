import { inject, Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductData {
  private readonly api = 'https://stone-server.onrender.com/products';
  private readonly http = inject(HttpClient);
  /*products: Product[] = [
    {
      id: 0,
      name: 'nisi elit',
      price: 85.59,
      weight: 22,
    },
    {
      id: 1,
      name: 'pariatur aliquip',
      price: 122.39,
      weight: 21,
    },
    {
      id: 2,
      name: 'nulla cillum',
      price: 151.49,
      weight: 20,
    },
    {
      id: 3,
      name: 'id exercitation',
      price: 128.45,
      weight: 23,
    },
    {
      id: 4,
      name: 'commodo minim',
      price: 111.34,
      weight: 21,
    },
    {
      id: 5,
      name: 'duis tempor',
      price: 164.61,
      weight: 24,
    },
    {
      id: 6,
      name: 'excepteur nostrud',
      price: 71.62,
      weight: 38,
    },
  ];*/

  getList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  addProduct(newProduct: Partial<Product>): Observable<void> {
    return this.http.post<void>(this.api, newProduct);
  }
}

export class MockProductData {
  getList(): Observable<Product[]> {
    return of([
      {
        id: -1,
        name: 'test',
        price: 5,
        weight: 10,
      },
    ]);
  }

  addProduct(product: Product): Observable<void> {
    return of();
  }
}
