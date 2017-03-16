"use strict";
var testing_1 = require("@angular/core/testing");
var Rx_1 = require("rxjs/Rx");
var product_list_component_1 = require("./product-list.component");
var product_service_1 = require("../../services/product.service");
var product_1 = require("../../model/product");
var basket_service_1 = require("../../services/basket.service");
var fixture;
var comp;
var mockProducts = [new product_1.Product(1, 'Mock Product 1', 'Some description', 'logo.svg', 14.95),
    new product_1.Product(2, 'Mock Product 2', 'Other description', 'logo.svg', 7.95)];
var ProductServiceMock = (function () {
    function ProductServiceMock() {
    }
    ProductServiceMock.prototype.getProducts = function () {
        return Rx_1.Observable.of(mockProducts);
    };
    return ProductServiceMock;
}());
describe('Product List Component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [product_list_component_1.ProductListComponent],
            providers: [
                { provide: product_service_1.ProductService, useClass: ProductServiceMock },
                basket_service_1.BasketService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(product_list_component_1.ProductListComponent);
        comp = fixture.componentInstance;
        fixture.detectChanges();
    });
    describe('the product list', function () {
        it('should be a block of products', function () {
            var products = fixture.nativeElement.querySelector('div#products');
            expect(products).toBeTruthy();
        });
        it('should show all products in the list', function () {
            // check that the number of product divs equals the number of products in the list
            var productDivs = fixture.nativeElement.querySelectorAll('div.product');
            console.log(productDivs);
            expect(productDivs.length).toEqual(2);
        });
    });
    describe('a product item', function () {
        it('should have a title', function () {
            // check that there are as manyu product titles as products
            // Check that the correct titles are shown for each product
        });
        it('should have a price', function () {
            // check that there are as many price elements as products in the list
            // check that the correct prices are shown for each product
        });
        it('should have a button to add the product to the basket', function () {
            expect(fixture.nativeElement.querySelector('div.product a.btn-green')).toBeTruthy();
        });
        it('should add the product to the cart when the button is clicked', function () {
            // Obtain the injected instance of the BasketService so we can spy on its methods
            var basketService = fixture.debugElement.injector.get(basket_service_1.BasketService);
            spyOn(basketService, 'addProduct');
            // click on the button of a product to add it to the basket
            // check that the method we just spied on has been called with the corresponding product
        });
        it('should show alert when product is added', function () {
            // click on the button of a product to add it to the basket
            // check that there is an alert element
        });
    });
});
//# sourceMappingURL=product-list.component.spec.js.map