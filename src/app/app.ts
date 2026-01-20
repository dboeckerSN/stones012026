import { Component, signal } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('stones');

  productParent = new Product(0, 'Grabstein Gravo', 12.56, 32.45);

  onPriceChange(price: number) {
    alert('Neuer Preis: ' + price);
  }

  changePrice(price: number) {
    this.productParent.price = price;
    this.onPriceChange(this.productParent.price);
  }
}
