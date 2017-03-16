"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var basket_service_1 = require("../../services/basket.service");
var router_1 = require("@angular/router");
var BasketViewComponent = (function () {
    function BasketViewComponent(_basketService, router) {
        this._basketService = _basketService;
        this.router = router;
    }
    BasketViewComponent.prototype.getBasketItems = function () {
        return this._basketService.getProducts();
    };
    BasketViewComponent.prototype.getBasketTotalItems = function () {
        return this._basketService.getTotalItems();
    };
    BasketViewComponent.prototype.getBasketTotalPrice = function () {
        return this._basketService.getTotalPrice();
    };
    BasketViewComponent.prototype.removeProduct = function (item) {
        this._basketService.removeProduct(item.product);
    };
    BasketViewComponent.prototype.decreaseProductQuantity = function (item) {
        this._basketService.changeProductQuantity(item.product, item.quantity - 1);
    };
    BasketViewComponent.prototype.increaseProductQuantity = function (item) {
        this._basketService.changeProductQuantity(item.product, item.quantity + 1);
    };
    BasketViewComponent.prototype.getProductTotalPrice = function (item) {
        return item.product.price * item.quantity;
    };
    BasketViewComponent.prototype.finalize = function () {
        this.router.navigate(['billing']);
    };
    return BasketViewComponent;
}());
BasketViewComponent = __decorate([
    core_1.Component({
        selector: 'basket-view',
        moduleId: module.id,
        templateUrl: './basket-view.component.html',
    }),
    __metadata("design:paramtypes", [basket_service_1.BasketService, router_1.Router])
], BasketViewComponent);
exports.BasketViewComponent = BasketViewComponent;
//# sourceMappingURL=basket-view.component.js.map