import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingFormComponent } from './billing-form.component';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

describe('BillingFormComponent', () => {
  let component: BillingFormComponent;
  let fixture: ComponentFixture<BillingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ BillingFormComponent ]
    })
    .compileComponents();
  }));

  // store the component and the fixture at this point so we can reuse them later

  it('should show a warning when the users doesn\'t enter a postcode', () => {
    // click on the form submit button
    // verify that the postcodeWarning element is visible
  });

  it('should store the values entered in the form on the component', () => {
    // use the component we stored earlier and its billingForm property to directly manipulate values
    component.billingForm.controls['fullname'].setValue('John Doe');

    // The address property of the billingForm
    const addressGroup: FormGroup = component.billingForm.controls['address'] as FormGroup;

    // now fill out the remaining required fields of the form

    // click the submit button

    // Expect that the sendBillTo object on the controller is now a javascript object with the values you just entered
  });
});
