import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Product } from '../model/product';
import { BasketItem } from '../model/basketitem';

@Injectable()
export class BasketService {
  private _items: BasketItem[];
  private _subject: BehaviorSubject<BasketItem[]>;

  constructor() {
    this._subject = <BehaviorSubject<BasketItem[]>>new BehaviorSubject([]);
    this.clearBasket();
  }

  addProduct(product: Product): void {
    let index = this.getProductIndex(product);
    if (index === -1) {
      this._items.push(new BasketItem(product));
      this.update();
    } else {
      let item = this._items[index];
      this.changeProductQuantity(item.product, item.quantity + 1);
    }
  }

  changeProductQuantity(product: Product, quantity: number): void {
    if (quantity < 0) { throw new RangeError('Quantity should not be negative'); }
    let index = this.getProductIndex(product);

    if (quantity === 0) {
      this.removeProduct(product);
    } else if (index >= 0 && this._items.length > index) {
      this._items[index].quantity = quantity;
      this.update();
    }
  }

  removeProduct(product: Product): void {
    let index = this.getProductIndex(product);
    if (index >= 0 && this._items.length > index) {
      this._items.splice(index, 1);
      this.update();
    }
  }

  getProducts(): Observable<BasketItem[]> {
    return this._subject.asObservable();
  }

  clearBasket(): void {
    this._items = new Array<BasketItem>();
    this.update();
  }

  getTotalItems(): number {
    return this._items.reduce((memo, item) => memo + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this._items.reduce((memo, item) =>  memo + item.product.price * item.quantity, 0);
  }

  private getProductIndex(product: Product): number {
    return this._items.findIndex(function (cur) {
        return product === cur.product;
    });
  }

  private update(): void {
    this._subject.next(this._items);
  }

}
