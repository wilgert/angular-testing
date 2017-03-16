"use strict";
var basket_service_1 = require("./basket.service");
var product_1 = require("../model/product");
var product1 = new product_1.Product(1, 'Test Product 1', '', '', 1);
var product2 = new product_1.Product(2, 'Test Product 2', '', '', 2);
var service;
var items;
describe('Basket Service', function () {
    beforeEach(function () {
        service = new basket_service_1.BasketService();
        // register an observer that listens to product changes and assigns the latest value to `items`
        service.getProducts().subscribe(function (x) { return items = x; });
    });
    describe('', function () {
        it('should be able to add a product with default quantity 1', function () {
            // add a product
            // check that the product has been added with quantity 1
        });
        it('should be able to remove a product after adding it', function () {
            // add a product
            // remove a product
            // check that there are no items
        });
        it('should be empty after clearing', function () {
            // add some products
            // clear the basket
            // check that there are no items
        });
        it('should not allow negative quantities', function () {
            service.addProduct(product1);
            expect(function () { return service.changeProductQuantity(product1, -1); }).toThrowError(RangeError);
        });
        it('should be able to change the quantity of a product', function () {
            // add a product
            // change the quantity of that product by calling the proper method
            // check that the quantity is the value you changed it to
        });
        it('should not change the quantity of any other product when changing the quantity of one product', function () {
            // add 2 distinct products
            // change the quantity of 1 of the products
            // chaeck the quantities of both products to make sure only 1 was changed
        });
        it('should correctly calculate the total items in the basket', function () {
            // add several distinct products
            // change their quantities
            // expect that the total quatity in the basket is euqal to the sum of the individual quantities
        });
        it('should correctly calculate the total price of the basket', function () {
            // add several distinct products
            // make sure the total price is euqal to the sum of the product's price times its quantity
        });
        it('should correctly calculate the total price of the basket when emptied', function () {
            // add some products
            // clear the basket
            // check that the total price is 0
        });
        it('should silently do nothing when a product is removed that is not in the basket', function () {
            // try to remove a product that was not added to the basket
        });
        it('should remove a product when its quantity is changed to 0', function () {
            // add a product
            // change its quantity to 0
            // expect that the total number of items in the basket is 0
        });
    });
});
//# sourceMappingURL=basket.service.spec.js.map