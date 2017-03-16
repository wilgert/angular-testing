"use strict";
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
var product_service_1 = require("./product.service");
var testing_2 = require("@angular/http/testing");
describe('Product Service', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                { provide: product_service_1.ProductService },
                product_service_1.ProductService,
                { provide: http_1.XHRBackend, useClass: testing_2.MockBackend },
                testing_2.MockBackend
            ]
        });
    }));
    describe('getProducts()', function () {
        it('should return an Observable of type product', testing_1.inject([product_service_1.ProductService, http_1.XHRBackend], function (productService, mockBackend) {
            // Define the response that the backend could give
            var mockResponse = [
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
        }));
    });
});
//# sourceMappingURL=product.service.spec.js.map