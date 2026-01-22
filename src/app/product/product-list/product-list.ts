import { Component, inject } from '@angular/core';
import { ProductData } from '../product-data';
import { AsyncPipe, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductDisplay } from '../product-display/product-display';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [NgClass, AsyncPipe, MatButtonModule, MatCardModule, ProductDisplay, RouterLink],
})
export class ProductList {
  products = inject(ProductData).getList();
}
