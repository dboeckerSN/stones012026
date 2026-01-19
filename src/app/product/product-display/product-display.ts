import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  standalone: false,
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay {
  product: Product = new Product(0, 'Grabstein Gravo', 12.56, 32.45);

  increasePrice() {
    this.product.price += 5;
    alert('Neuer Preis: ' + this.product.price);
  }
}
