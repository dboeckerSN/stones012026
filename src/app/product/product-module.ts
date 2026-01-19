import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductDisplay } from './product-display/product-display';


@NgModule({
  declarations: [
    ProductDisplay
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductDisplay
  ]
})
export class ProductModule { }
