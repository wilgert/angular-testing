import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { BasketSummaryComponent } from './features/basket-summary/basket-summary.component';
import { BasketService } from './services/basket.service';
import { ProductService } from './services/product.service';

describe('App Component', function () {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ProductListComponent, BasketSummaryComponent ],
      providers: [ BasketService, ProductService ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create component', () => expect(comp).toBeDefined() );
});
