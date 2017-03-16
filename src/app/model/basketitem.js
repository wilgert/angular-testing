"use strict";
var BasketItem = (function () {
    function BasketItem(product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.product = product;
        this.quantity = quantity;
    }
    return BasketItem;
}());
exports.BasketItem = BasketItem;
//# sourceMappingURL=basketitem.js.map