"use strict";
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./features/product-list/product-list.component");
var basket_summary_component_1 = require("./features/basket-summary/basket-summary.component");
var basket_service_1 = require("./services/basket.service");
var product_service_1 = require("./services/product.service");
describe('App Component', function () {
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, basket_summary_component_1.BasketSummaryComponent],
            providers: [basket_service_1.BasketService, product_service_1.ProductService],
            imports: [testing_2.RouterTestingModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
});
//# sourceMappingURL=app.component.spec.js.map