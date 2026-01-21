import { TestBed } from '@angular/core/testing';

import { ProductData } from './product-data';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

describe('ProductData', () => {
  let service: ProductData;
  let mockHttp: Partial<HttpClient>;
  let api = 'https://stone-server.onrender.com/products';

  beforeEach(() => {
    mockHttp = {
      get: vi.fn(),
      post: vi.fn(),
    };
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttp }],
    });
    service = TestBed.inject(ProductData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('"getList" should call correct api', () => {
    // given + when
    service.getList();

    // then
    expect(mockHttp.get).toHaveBeenCalledWith(api);
  });

  it('"addProduct" should add a product to the productlist', () => {
    // given
    const product = new Product(-1, 'TestStein', 10, 20);

    // when
    service.addProduct(product);

    // then
    expect(mockHttp.post).toHaveBeenCalledWith(api, product);
  });
});
