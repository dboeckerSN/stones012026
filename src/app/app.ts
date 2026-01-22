import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [MatToolbarModule, UpperCasePipe, DatePipe, RouterLink, RouterOutlet],
})
export class App {
  protected readonly title = signal('stones');
  heute = new Date();

  onPriceChange(price: number) {
    alert('Neuer Preis: ' + price);
  }
}
