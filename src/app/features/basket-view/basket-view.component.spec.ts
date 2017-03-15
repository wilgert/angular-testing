import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BasketViewComponent } from './basket-view.component';
import { Product } from '../../model/product';
import { BasketService } from '../../services/basket.service';
import { Router } from '@angular/router';

let fixture: ComponentFixture<BasketViewComponent>;
let basketService: BasketService;

const product1: Product = new Product(1, 'Mock Product 1', '', '', 2);
const product2: Product = new Product(2, 'Mock Product 2', '', '', 3.25);

class MockRouter {
    navigate(args: string[] ) { return args; }
}

describe('Basket View Component', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ BasketViewComponent ],
          providers: [ BasketService, { provide: Router, useClass: MockRouter } ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketViewComponent);
    basketService = fixture.debugElement.injector.get(BasketService);
    fixture.detectChanges();
  });

  it ('should show cart empty message when cart is empty', () => {
    expect(fixture.nativeElement.querySelector('div[data-e2e-id=cart-empty-alert]')).toBeTruthy();
  });

  it ('should show a product', () => {
    basketService.addProduct(product1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('tr[data-e2e-id=cart-product]')).toBeTruthy();
  });

  it ('should be possible to remove a product', () => {
    spyOn(basketService, 'removeProduct');
    basketService.addProduct(product1);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('span[data-e2e-id=cart-remove-product]'));
    element.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(basketService.removeProduct).toHaveBeenCalledWith(product1);
  });

  it ('should show the decrease product quantity if product quantity is more then one', () => {
    basketService.addProduct(product1);
    basketService.addProduct(product1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span[disabled="true"]')).toBeFalsy();
  });

  it ('should not show the decrease product quantity if product quantity is one or less', () => {
    basketService.addProduct(product1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span[disabled="true"]')).toBeTruthy();
  });

  it ('should be possible to decrease the product quantity', () => {
    basketService.addProduct(product1);
    basketService.addProduct(product1);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('span[data-e2e-id=cart-product-decrease-quantity]'));
    element.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(basketService.getTotalItems()).toBe(1);
  });

  it ('should be possible to increase the product quantity', () => {
    basketService.addProduct(product1);
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('span[data-e2e-id=cart-product-increase-quantity]'));
    element.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(basketService.getTotalItems()).toBe(2);
  });

  it ('should show the total product price', () => {
    basketService.addProduct(product1);
    basketService.addProduct(product1);
    basketService.addProduct(product1);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('td[data-e2e-id=cart-product-total-price]').innerText).toEqual('€6.00');
  });

  it ('should show the total basket price', () => {
    basketService.addProduct(product1);
    basketService.addProduct(product1);
    basketService.addProduct(product2);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('td[data-e2e-id=cart-total-price]').innerText).toEqual('€7.25');
  });

  it('should navigate to the biling page upon clicking the button', () => {
    const router = fixture.debugElement.injector.get(Router);
    spyOn(router, 'navigate');
    basketService.addProduct(product1);
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['billing']);
  });
});
