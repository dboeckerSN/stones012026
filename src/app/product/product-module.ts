import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing-module';
import { ProductDisplay } from './product-display/product-display';
import { UtilsModule } from '../utils/utils-module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductForm } from './product-form/product-form';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductList } from './product-list/product-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ProductDisplay, ProductForm, ProductList],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    UtilsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  exports: [ProductDisplay, ProductForm],
})
export class ProductModule {}
