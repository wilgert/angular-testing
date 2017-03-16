"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var BillingFormComponent = (function () {
    function BillingFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    BillingFormComponent.prototype.ngOnInit = function () {
        this.billingForm = this.formBuilder.group({
            fullname: '',
            address: this.formBuilder.group({
                addressLine: ['', forms_1.Validators.required],
                postcode: ['', [forms_1.Validators.required, forms_1.Validators.pattern(/\d{4} ?[a-zA-Z]{2}/)]],
                city: ['', forms_1.Validators.required]
            })
        });
    };
    BillingFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.sendBillTo = this.billingForm.value;
        console.log('Thank you for ordering!');
    };
    return BillingFormComponent;
}());
BillingFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'billing-form',
        templateUrl: './billing-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], BillingFormComponent);
exports.BillingFormComponent = BillingFormComponent;
//# sourceMappingURL=billing-form.component.js.map