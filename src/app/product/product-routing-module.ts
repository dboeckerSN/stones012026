import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductForm } from './product-form/product-form';
import { hasSavedGuard } from '../utils/guards/has-saved-guard';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductList },
      { path: 'new', component: ProductForm, canDeactivate: [hasSavedGuard] },
      { path: 'new/:id', component: ProductForm, canDeactivate: [hasSavedGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
