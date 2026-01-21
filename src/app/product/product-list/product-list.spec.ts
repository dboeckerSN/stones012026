import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductList } from './product-list';
import { provideRouter } from '@angular/router';
import { MockProductData, ProductData } from '../product-data';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([]), { provide: ProductData, useClass: MockProductData }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products from productData-service', () => {
    // given + when + then
    component.products.subscribe((products) => {
      expect(products[0].id).toBe(-1);
    });
  });
});
