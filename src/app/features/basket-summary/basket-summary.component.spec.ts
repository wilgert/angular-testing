import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BasketSummaryComponent } from './basket-summary.component';
import { Product } from '../../model/product';
import { BasketService } from '../../services/basket.service';

let fixture: ComponentFixture<BasketSummaryComponent>;
let basketService: BasketService;


const product1: Product = new Product(1, 'Mock Product 1', '', '', 2);
const product2: Product = new Product(2, 'Mock Product 2', '', '', 3.25);

describe('Basket Summary Component', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [ BasketSummaryComponent ],
          providers: [ BasketService ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketSummaryComponent);
    basketService = fixture.debugElement.injector.get(BasketService);
    basketService.addProduct(product1);
    basketService.addProduct(product2);
    basketService.changeProductQuantity(product1, 3);
    basketService.changeProductQuantity(product2, 5);
    fixture.detectChanges();
  });

  it ('should show the total items', () => {
    expect(fixture.nativeElement.querySelector('span[data-e2e-id=cart-summary-product-count]').innerText).toEqual('8');
  });

  it ('should show the total price', () => {
    expect(fixture.nativeElement.querySelector('span[data-e2e-id=cart-summary-total-price]').innerText).toEqual('€22.25');
  });
});
