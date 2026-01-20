import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductDisplay } from './product-display/product-display';
import { UtilsModule } from '../utils/utils-module';


@NgModule({
  declarations: [
    ProductDisplay
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UtilsModule
  ],
  exports: [
    ProductDisplay
  ]
})
export class ProductModule { }
