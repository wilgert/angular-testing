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
var BasketSummaryComponent = (function () {
    function BasketSummaryComponent(_basketService) {
        this._basketService = _basketService;
    }
    BasketSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._basketService.getProducts()
            .subscribe(function (basketItems) {
            var totals = basketItems.reduce(function (memo, item) {
                memo.price += item.quantity * item.product.price;
                memo.quantity += item.quantity;
                return memo;
            }, { quantity: 0, price: 0 });
            _this.totalItems = totals.quantity;
            _this.totalPrice = totals.price;
        });
    };
    return BasketSummaryComponent;
}());
BasketSummaryComponent = __decorate([
    core_1.Component({
        selector: 'basket-summary',
        moduleId: module.id,
        templateUrl: './basket-summary.component.html',
    }),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketSummaryComponent);
exports.BasketSummaryComponent = BasketSummaryComponent;
//# sourceMappingURL=basket-summary.component.js.map