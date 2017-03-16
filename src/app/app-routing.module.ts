import { NgModule }              from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './features/product-list/product-list.component';
import { BasketViewComponent } from './features/basket-view/basket-view.component';
import { BillingFormComponent } from './features/billing-form/billing-form.component';

export const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'basket', component: BasketViewComponent },
  { path: 'billing', component: BillingFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
