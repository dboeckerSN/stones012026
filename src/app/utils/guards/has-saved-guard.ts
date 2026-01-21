import { CanDeactivateFn } from '@angular/router';
import { ProductForm } from '../../product/product-form/product-form';

export const hasSavedGuard: CanDeactivateFn<ProductForm> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.hasSaved()
    ? true
    : confirm('Du hast ungespeicherte Änderungen, willst Du wirklich gehen?');
};
