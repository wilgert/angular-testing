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
var product_service_1 = require("../../services/product.service");
var basket_service_1 = require("../../services/basket.service");
var ProductListComponent = (function () {
    function ProductListComponent(_productService, _basketService) {
        this._productService = _productService;
        this._basketService = _basketService;
        this._showAlert = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProductsFromService();
    };
    ProductListComponent.prototype.getProductsFromService = function () {
        var _this = this;
        this._productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        }, function (error) { return _this.error = error; });
    };
    ProductListComponent.prototype.addToCart = function (product) {
        var _this = this;
        this._basketService.addProduct(product);
        this._showAlert = true;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(function () {
            _this._showAlert = false;
            _this.timeoutId = null;
        }, 3000);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        moduleId: module.id,
        templateUrl: './product-list.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, basket_service_1.BasketService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map