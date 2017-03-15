import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'product-list',
  moduleId: module.id,
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  error: any;
  private products: Product[];

  private _showAlert: boolean = false;
  private timeoutId: any;

  constructor(private _productService: ProductService, private _basketService: BasketService) {}

  ngOnInit(): void {
    this.getProductsFromService();
  }

  getProductsFromService(): void {
    this._productService.getProducts()
      .subscribe(products => {
        this.products = products;
      }, error => this.error = error);
  }

  addToCart(product: Product): void {
    this._basketService.addProduct(product);
    this._showAlert = true;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this._showAlert = false;
      this.timeoutId = null;
    }, 3000);
  }
}
