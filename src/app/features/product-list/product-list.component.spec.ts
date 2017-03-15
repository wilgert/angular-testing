import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';

import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { BasketService } from '../../services/basket.service';

let fixture: ComponentFixture<ProductListComponent>;
let comp: ProductListComponent;

const mockProducts: Product[] = [new Product(1, 'Mock Product 1', 'Some description', 'logo.svg', 14.95),
                                 new Product(2, 'Mock Product 2', 'Other description', 'logo.svg', 7.95)];

class ProductServiceMock {
  getProducts() {
    return Observable.of(mockProducts);
  }
}

describe('Product List Component', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ ProductListComponent ],
          providers: [
            { provide: ProductService, useClass: ProductServiceMock },
            BasketService
          ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('the product list', () => {
    it ('should be a block of products', () => {
      expect(fixture.nativeElement.querySelector('div#products')).toBeTruthy();
    });

    it ('should show all products in the list', () => {
      // check that the number of product divs equals the number of products in the list
    });
  });

  describe('a product item', () => {
    it ('should have a title', () => {
      // check that there are as manyu product titles as products
      // Check that the correct titles are shown for each product
    });

    it ('should have a price', () => {
      // check that there are as many price elements as products in the list
      // check that the correct prices are shown for each product
    });

    it ('should have a button to add the product to the basket', () => {
      expect(fixture.nativeElement.querySelector('div.product a.btn-green')).toBeTruthy();
    });

    it ('should add the product to the cart when the button is clicked', () => {
      // Obtain the injected instance of the BasketService so we can spy on its methods
      let basketService = fixture.debugElement.injector.get(BasketService);
      spyOn(basketService, 'addProduct');

      // click on the button of a product to add it to the basket
      // check that the method we just spied on has been called with the corresponding product
    });

    it ('should show alert when product is added', () => {
      // click on the button of a product to add it to the basket
      // check that there is an alert element
    });
  });
});
