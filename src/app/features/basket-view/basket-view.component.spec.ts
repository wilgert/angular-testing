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
    // Add a product to the basket
    // expect that there is a Table Row element for the cart-product
    // Remind that you need to trigger change detection to update the view
  });

  it ('should be possible to remove a product', () => {
    // We're going to check whether this method will be invoked when the remove button is clicked
    spyOn(basketService, 'removeProduct');
    basketService.addProduct(product1);
    fixture.detectChanges();

    // The basket now contains 1 product. Click its remove button to trigger the method

    // inspect whether the method we spied on has been invoked
  });

  it ('should show the decrease product quantity if product quantity is more then one', () => {
    basketService.addProduct(product1);
    basketService.addProduct(product1);
    // Note that change detection has not run yet
    // check whether the decrease button is enabled
  });

  it ('should not show the decrease product quantity if product quantity is one or less', () => {
    // Add 1 product to the basket and check that the decrease button is disabled
  });

  it ('should be possible to decrease the product quantity', () => {
    // Add 2 products to the basket
    // Click on the decrease button
    // Check that the basketService only contains 1 item
  });

  it ('should be possible to increase the product quantity', () => {
    // Add a product to the basket
    // click on the product quantity increase button
    // check that the basketservice contains 2 items
  });

  it ('should show the total product price', () => {
    // add the same product a number of times to the basket

    // check that the cart-product-total-price cell contains the total price for the product
  });

  it ('should show the total basket price', () => {
    // add a number of direrent products to the basket
    // Check that the cart-total-price cell contains the sum of all total prices
  });

  it('should navigate to the biling page upon clicking the button', () => {
    // Get the injected instance (the mock we defined) of the Router so we can spy upon it
    const router = fixture.debugElement.injector.get(Router);
    spyOn(router, 'navigate');

    // add a product to the basket
    // click on the button to purchase the product in the basket
    // check that the method we spied upon has been called to navigate to the 'billing' route
  });
});
