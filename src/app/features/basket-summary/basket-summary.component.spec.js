"use strict";
var testing_1 = require("@angular/core/testing");
var basket_summary_component_1 = require("./basket-summary.component");
var product_1 = require("../../model/product");
var basket_service_1 = require("../../services/basket.service");
var fixture;
var basketService;
var product1 = new product_1.Product(1, 'Mock Product 1', '', '', 2);
var product2 = new product_1.Product(2, 'Mock Product 2', '', '', 3.25);
describe('Basket Summary Component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [basket_summary_component_1.BasketSummaryComponent],
            providers: [basket_service_1.BasketService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(basket_summary_component_1.BasketSummaryComponent);
        basketService = fixture.debugElement.injector.get(basket_service_1.BasketService);
        basketService.addProduct(product1);
        basketService.addProduct(product2);
        basketService.changeProductQuantity(product1, 3);
        basketService.changeProductQuantity(product2, 5);
        fixture.detectChanges();
    });
    it('should show the total items', function () {
        // Find the summary count element and inspect its value
    });
    it('should show the total price', function () {
        // find the total price element and inspect its value
    });
});
//# sourceMappingURL=basket-summary.component.spec.js.map