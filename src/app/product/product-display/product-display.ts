import { Component, input, output} from '@angular/core';
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

  increasePrice() {
    this.product().price += 5;
    this.priceChange.emit(this.product().price);
  }
}
