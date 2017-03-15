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
      expect(fixture.nativeElement.querySelectorAll('div#products div.product').length).toBe(2);
    });
  });

  describe('a product item', () => {
    it ('should have a title', () => {
      expect(fixture.nativeElement.querySelectorAll('div.product h3').length).toBe(2);
      expect(fixture.nativeElement.querySelector('div.product h3').innerText).toEqual('Mock Product 1');
    });

    it ('should have a price', () => {
      expect(fixture.nativeElement.querySelectorAll('div.product h4.price').length).toBe(2);
      expect(fixture.nativeElement.querySelector('div.product h4.price').innerText).toEqual('€14.95');
    });

    it ('should have a button to add the product to the basket', () => {
      expect(fixture.nativeElement.querySelector('div.product a.btn-green')).toBeTruthy();
    });

    it ('should add the product to the cart when the button is clicked', () => {
      let basketService = fixture.debugElement.injector.get(BasketService);
      spyOn(basketService, 'addProduct');
      const element = fixture.debugElement.query(By.css('div.product a.btn-green'));
      element.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(basketService.addProduct).toHaveBeenCalledWith(mockProducts[0]);
    });

    it ('should show alert when product is added', () => {
      const element = fixture.debugElement.query(By.css('div.product a.btn-green'));
      element.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('div.alert')).toBeTruthy();
    });
  });
});
