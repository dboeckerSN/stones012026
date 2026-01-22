import { Component, input, output } from '@angular/core';
import { Product } from '../product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NettoPipe } from '../../utils/pipes/netto-pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
  imports: [
    CommonModule,
    NettoPipe,
    CurrencyPipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
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
