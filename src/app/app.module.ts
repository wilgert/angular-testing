import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './features/product-list/product-list.component';
import { BasketViewComponent } from './features/basket-view/basket-view.component';
import { BasketSummaryComponent } from './features/basket-summary/basket-summary.component';
import { BasketService } from './services/basket.service';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BillingFormComponent } from './features/billing-form/billing-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ProductListComponent, BasketViewComponent, BasketSummaryComponent, BillingFormComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ProductService, BasketService ]
})
export class AppModule { }
