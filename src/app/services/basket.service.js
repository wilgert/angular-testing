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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var basketitem_1 = require("../model/basketitem");
var BasketService = (function () {
    function BasketService() {
        this._subject = new BehaviorSubject_1.BehaviorSubject([]);
        this.clearBasket();
    }
    BasketService.prototype.addProduct = function (product) {
        var index = this.getProductIndex(product);
        if (index === -1) {
            this._items.push(new basketitem_1.BasketItem(product));
            this.update();
        }
        else {
            var item = this._items[index];
            this.changeProductQuantity(item.product, item.quantity + 1);
        }
    };
    BasketService.prototype.changeProductQuantity = function (product, quantity) {
        if (quantity < 0) {
            throw new RangeError('Quantity should not be negative');
        }
        var index = this.getProductIndex(product);
        if (quantity === 0) {
            this.removeProduct(product);
        }
        else if (index >= 0 && this._items.length > index) {
            this._items[index].quantity = quantity;
            this.update();
        }
    };
    BasketService.prototype.removeProduct = function (product) {
        var index = this.getProductIndex(product);
        if (index >= 0 && this._items.length > index) {
            this._items.splice(index, 1);
            this.update();
        }
    };
    BasketService.prototype.getProducts = function () {
        return this._subject.asObservable();
    };
    BasketService.prototype.clearBasket = function () {
        this._items = new Array();
        this.update();
    };
    BasketService.prototype.getTotalItems = function () {
        return this._items.reduce(function (memo, item) { return memo + item.quantity; }, 0);
    };
    BasketService.prototype.getTotalPrice = function () {
        return this._items.reduce(function (memo, item) { return memo + item.product.price * item.quantity; }, 0);
    };
    BasketService.prototype.getProductIndex = function (product) {
        return this._items.findIndex(function (cur) {
            return product === cur.product;
        });
    };
    BasketService.prototype.update = function () {
        this._subject.next(this._items);
    };
    return BasketService;
}());
BasketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map