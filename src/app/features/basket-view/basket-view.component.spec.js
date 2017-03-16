"use strict";
var testing_1 = require("@angular/core/testing");
var basket_view_component_1 = require("./basket-view.component");
var product_1 = require("../../model/product");
var basket_service_1 = require("../../services/basket.service");
var router_1 = require("@angular/router");
var fixture;
var basketService;
var product1 = new product_1.Product(1, 'Mock Product 1', '', '', 2);
var product2 = new product_1.Product(2, 'Mock Product 2', '', '', 3.25);
var MockRouter = (function () {
    function MockRouter() {
    }
    MockRouter.prototype.navigate = function (args) { return args; };
    return MockRouter;
}());
describe('Basket View Component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [basket_view_component_1.BasketViewComponent],
            providers: [basket_service_1.BasketService, { provide: router_1.Router, useClass: MockRouter }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(basket_view_component_1.BasketViewComponent);
        basketService = fixture.debugElement.injector.get(basket_service_1.BasketService);
        fixture.detectChanges();
    });
    it('should show cart empty message when cart is empty', function () {
        expect(fixture.nativeElement.querySelector('div[data-e2e-id=cart-empty-alert]')).toBeTruthy();
    });
    it('should show a product', function () {
        // Add a product to the basket
        // expect that there is a Table Row element for the cart-product
        // Remind that you need to trigger change detection to update the view
    });
    it('should be possible to remove a product', function () {
        // We're going to check whether this method will be invoked when the remove button is clicked
        spyOn(basketService, 'removeProduct');
        basketService.addProduct(product1);
        fixture.detectChanges();
        // The basket now contains 1 product. Click its remove button to trigger the method
        // inspect whether the method we spied on has been invoked
    });
    it('should show the decrease product quantity if product quantity is more then one', function () {
        basketService.addProduct(product1);
        basketService.addProduct(product1);
        // Note that change detection has not run yet
        // check whether the decrease button is enabled
    });
    it('should not show the decrease product quantity if product quantity is one or less', function () {
        // Add 1 product to the basket and check that the decrease button is disabled
    });
    it('should be possible to decrease the product quantity', function () {
        // Add 2 products to the basket
        // Click on the decrease button
        // Check that the basketService only contains 1 item
    });
    it('should be possible to increase the product quantity', function () {
        // Add a product to the basket
        // click on the product quantity increase button
        // check that the basketservice contains 2 items
    });
    it('should show the total product price', function () {
        // add the same product a number of times to the basket
        // check that the cart-product-total-price cell contains the total price for the product
    });
    it('should show the total basket price', function () {
        // add a number of direrent products to the basket
        // Check that the cart-total-price cell contains the sum of all total prices
    });
    it('should navigate to the biling page upon clicking the button', function () {
        // Get the injected instance (the mock we defined) of the Router so we can spy upon it
        var router = fixture.debugElement.injector.get(router_1.Router);
        spyOn(router, 'navigate');
        // add a product to the basket
        // click on the button to purchase the product in the basket
        // check that the method we spied upon has been called to navigate to the 'billing' route
    });
});
//# sourceMappingURL=basket-view.component.spec.js.map