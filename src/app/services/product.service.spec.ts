import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpModule,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { ProductService } from './product.service';
import { MockBackend } from '@angular/http/testing';


describe('Product Service', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: ProductService },
        ProductService,
        { provide: XHRBackend, useClass: MockBackend },
        MockBackend
      ]
    });
  }));

  describe('getProducts()', () => {

    it('should return an Observable of type product',
      inject([ProductService, XHRBackend], (productService: ProductService, mockBackend: any) => {
        // Define the response that the backend could give
        const mockResponse: any = [
          {
            id: 1,
            name: 'Product 1'
          },
          {
            id: 2,
            name: 'Product 2'
          }
        ];

        // register an observer on the mock backed that accepts connections and uses `mockRespond` to return the mockResponse

        // register an observer on the list of products that checks the length and contents of the response with the mockResponse

      })
    );

  });

});
