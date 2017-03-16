"use strict";
var testing_1 = require("@angular/core/testing");
var billing_form_component_1 = require("./billing-form.component");
var forms_1 = require("@angular/forms");
describe('BillingFormComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.ReactiveFormsModule],
            declarations: [billing_form_component_1.BillingFormComponent]
        })
            .compileComponents();
    }));
    // store the component and the fixture at this point so we can reuse them later
    it('should show a warning when the users doesn\'t enter a postcode', function () {
        // click on the form submit button
        // verify that the postcodeWarning element is visible
    });
    it('should store the values entered in the form on the component', function () {
        // use the component we stored earlier and its billingForm property to directly manipulate values
        component.billingForm.controls['fullname'].setValue('John Doe');
        // The address property of the billingForm
        var addressGroup = component.billingForm.controls['address'];
        // now fill out the remaining required fields of the form
        // click the submit button
        // Expect that the sendBillTo object on the controller is now a javascript object with the values you just entered
    });
});
//# sourceMappingURL=billing-form.component.spec.js.map