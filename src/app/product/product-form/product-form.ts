import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'stn-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  saveProduct = output<Product>();

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl(0, [Validators.required, CustomValidators.positiv]),
    weight: new FormControl(0, [Validators.required, CustomValidators.positiv]),
  });
  readonly activatedRoute = inject(ActivatedRoute);
  id = -1;

  constructor() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.id = +id;
      }
    });
  }

  /*
  private readonly fb = inject(FormBuilder);
  productForm = this.fb.group({
    name: ['', [Validators.required, CustomValidators.alphaNum]],
    price: [0, [Validators.required, CustomValidators.positiv]],
    weight: [0, [Validators.required]],
  });
  */

  save() {
    const formValue = this.productForm.value;
    if (this.productForm.valid && formValue.name && formValue.price && formValue.weight) {
      const newProd: Product = {
        id: this.id,
        name: formValue.name,
        price: formValue.price,
        weight: formValue.weight,
      };
      this.saveProduct.emit(newProd);
      this.productForm.reset();
    }
  }

  hasSaved(): boolean {
    const formValue = this.productForm.value;
    return !formValue.name && !formValue.price && !formValue.weight;
  }
}
