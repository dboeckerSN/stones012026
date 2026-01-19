import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDisplay } from './product-display';
import { Product } from '../product';

describe('ProductDisplay', () => {
  let component: ProductDisplay;
  let fixture: ComponentFixture<ProductDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(ProductDisplay);
    component = fixture.componentInstance;
    component.product = new Product(0, 'Grabstein Granit', 12.56, 32.45);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('increasePrice should raise price by 5', () => {
    // given
    const oldPrice = component.product().price;

    // when
    component.increasePrice();

    // then
    expect(component.product().price).toBeCloseTo(oldPrice + 5);
  });
});
