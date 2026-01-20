import { Component, input, output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  product = input.required<Product>();
  priceChange = output<number>();
  styleConfig = {
    borderStyle: 'dashed',
  };
  showPrice = true;

  togglePrice() {
    this.showPrice = !this.showPrice;
  }

  increasePrice() {
    this.product().price += 5;
    this.priceChange.emit(this.product().price);
  }

  changePrice(price: number) {
    this.product().price = price;
    this.priceChange.emit(this.product().price);
  }
}
