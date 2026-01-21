import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductForm } from './product-form/product-form';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductList },
      { path: 'new', component: ProductForm },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
