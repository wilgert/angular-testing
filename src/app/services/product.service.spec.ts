import {TestBed, inject, async} from '@angular/core/testing';
import {
    HttpModule,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';

import {ProductService} from './product.service';
import {MockBackend} from "@angular/http/testing";


describe('Product Service', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {provide: ProductService},
                ProductService,
                {provide: XHRBackend, useClass: MockBackend},
                MockBackend
            ]
        });
    }));

    describe('getProducts()', () => {

        it("should return an Observable of type product",
            inject([ProductService, XHRBackend], (productService: ProductService, mockBackend: any) => {

                const mockResponse: any = [
                    {
                        id: 1,
                        name: "Product 1"
                    },
                    {
                        id:2,
                        name: "Product 2"
                    }
                ];

                mockBackend.connections.subscribe((connection: any) => {
                    connection.mockRespond(new Response(new ResponseOptions({
                        body: JSON.stringify(mockResponse)
                    })));
                });

                productService.getProducts().subscribe((products) => {
                    expect(products.length).toBe(2);
                    expect(products[0].name).toEqual("Product 1");
                    expect(products[1].name).toEqual("Product 2");
                });

            })
        );

    });

});
