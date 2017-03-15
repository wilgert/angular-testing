import { Product } from '../model/product';

export class BasketItem {
  product: Product;
  quantity: number;

  constructor(product: Product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

}
