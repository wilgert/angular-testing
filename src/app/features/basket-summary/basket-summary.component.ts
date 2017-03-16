import { Component, OnInit } from '@angular/core';

import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'basket-summary',
  templateUrl: './basket-summary.component.html',
})
export class BasketSummaryComponent implements OnInit {
  totalPrice: number;
  totalItems: number;

  constructor(private _basketService: BasketService) {}

  ngOnInit(): void {
    this._basketService.getProducts()
      .subscribe((basketItems) => {
        const totals = basketItems.reduce((memo, item) => {
          memo.price += item.quantity * item.product.price;
          memo.quantity += item.quantity;
          return memo;
        }, {quantity: 0, price: 0});
        this.totalItems = totals.quantity;
        this.totalPrice = totals.price;
      });
  }
}
