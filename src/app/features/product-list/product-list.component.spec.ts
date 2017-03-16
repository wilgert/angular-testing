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

      const products = fixture.nativeElement.querySelector('div#products');
      expect(products).toBeTruthy();
    });

    it ('should show all products in the list', () => {
      // check that the number of product divs equals the number of products in the list
      const productDivs = fixture.nativeElement.querySelectorAll('div.product');
      expect(productDivs.length).toEqual(2);
    });
  });

  describe('a product item', () => {
    it ('should have a title', () => {
      // check that there are as manyu product titles as products
      const titles = fixture.nativeElement.querySelectorAll('h3');
      expect(titles.length).toEqual(2);
      // Check that the correct titles are shown for each product
      expect(titles[0].innerText).toEqual('Mock Product 1');
      expect(titles[1].innerText).toEqual('Mock Product 2');
    });

    it ('should have a price', () => {
      // check that there are as many price elements as products in the list
      const prices = fixture.nativeElement.querySelectorAll('.price');
      expect(prices.length).toEqual(2);
      // check that the correct prices are shown for each product
      expect(prices[0].innerText).toEqual('€14.95');
      expect(prices[1].innerText).toEqual('€7.95');
    });

    it ('should have a button to add the product to the basket', () => {
      expect(fixture.nativeElement.querySelector('div.product a.btn-green')).toBeTruthy();
    });

    let basketService: any;
    let button: any;
    beforeEach(()=>{
      basketService = fixture.debugElement.injector.get(BasketService);
      spyOn(basketService, 'addProduct');
      button = fixture.nativeElement.querySelector('.btn-green');
      // click on the button of a product to add it to the basket
      button.click();

    });

    it ('should add the product to the cart when the button is clicked', () => {
      // Obtain the injected instance of the BasketService so we can spy on its methods

      // check that the method we just spied on has been called with the corresponding product
      expect(basketService.addProduct).toHaveBeenCalledWith(mockProducts[0]);
      expect(basketService.addProduct).toHaveBeenCalledTimes(1);
    });

    it ('should show alert when product is added', () => {
      // check that there is an alert element
      fixture.detectChanges();
      setTimeout(()=>{
        const alert = fixture.nativeElement.querySelector('.alert-success');
        console.log(alert);
        expect(alert).not.toBeNull()
      }, 0);

    });
  });
});
