import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { CustomValidators } from '../../utils/validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from '../product-data';
import { map } from 'rxjs';

@Component({
  selector: 'stn-product-form',
  standalone: false,
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  saveProduct = output<Product>();
  productData = inject(ProductData);

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl(0, [Validators.required, CustomValidators.positiv]),
    weight: new FormControl(0, [Validators.required, CustomValidators.positiv]),
  });
  id = -1;
  nameReversed = '';
  nameLength = 0;

  constructor() {
    inject(ActivatedRoute).paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      if (id) {
        this.id = +id;
      }
    });

    this.productForm.controls.name.valueChanges
      .pipe(map((n) => n?.split('').reverse().join('')))
      .subscribe((nameReversed) => {
        this.nameReversed = nameReversed ?? '';
      });

    this.productForm.controls.name.valueChanges.subscribe((value) => {
      this.nameLength = value ? value.length : 0;
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
      const newProd: Partial<Product> = {
        name: formValue.name,
        price: formValue.price,
        weight: formValue.weight,
      };
      this.productData.addProduct(newProd).subscribe();
      this.productForm.reset();
    }
  }

  hasSaved(): boolean {
    const formValue = this.productForm.value;
    return !formValue.name && !formValue.price && !formValue.weight;
  }
}
