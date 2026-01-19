import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  @Input({ required: true }) product!: Product;
  @Output() priceChange = new EventEmitter<number>();

  increasePrice() {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }
}
