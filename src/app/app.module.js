"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./features/product-list/product-list.component");
var basket_view_component_1 = require("./features/basket-view/basket-view.component");
var basket_summary_component_1 = require("./features/basket-summary/basket-summary.component");
var basket_service_1 = require("./services/basket.service");
var product_service_1 = require("./services/product.service");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var billing_form_component_1 = require("./features/billing-form/billing-form.component");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, basket_view_component_1.BasketViewComponent, basket_summary_component_1.BasketSummaryComponent, billing_form_component_1.BillingFormComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [product_service_1.ProductService, basket_service_1.BasketService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map