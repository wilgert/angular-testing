import { Component } from '@angular/core';

import { BasketService } from '../../services/basket.service';
import { BasketItem } from '../../model/basketitem';
import { Router } from '@angular/router';

@Component({
  selector: 'basket-view',
  templateUrl: './basket-view.component.html',
})
export class BasketViewComponent {

  constructor(private _basketService: BasketService, private router: Router) {}

  getBasketItems() {
    return this._basketService.getProducts();
  }

  getBasketTotalItems(): number {
    return this._basketService.getTotalItems();
  }

  getBasketTotalPrice(): number {
    return this._basketService.getTotalPrice();
  }

  removeProduct(item: BasketItem): void {
    this._basketService.removeProduct(item.product);
  }

  decreaseProductQuantity(item: BasketItem): void {
    this._basketService.changeProductQuantity(item.product, item.quantity - 1);
  }

  increaseProductQuantity(item: BasketItem): void {
    this._basketService.changeProductQuantity(item.product, item.quantity + 1);
  }

  getProductTotalPrice(item: BasketItem): number {
    return item.product.price * item.quantity;
  }
  finalize() {
    this.router.navigate(['billing']);
  }
}
