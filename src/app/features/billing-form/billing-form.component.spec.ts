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

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show a warning when the users doesn\'t enter a postcode', () => {
    expect(fixture.nativeElement.querySelector('[data-test="postcodeWarning"]')).not.toBeTruthy();
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[data-test="postcodeWarning"]')).toBeTruthy();
  });

  it('should store the values entered in the form on the component', () => {
    component.billingForm.controls['fullname'].setValue('John Doe');
    const addressGroup: FormGroup = component.billingForm.controls['address'] as FormGroup;
    addressGroup.controls['addressLine'].setValue('Sieraadstraat 1');
    addressGroup.controls['postcode'].setValue('1000 AA');
    addressGroup.controls['city'].setValue('Amsterdam');

    fixture.nativeElement.querySelector('button').click();
    expect(component.sendBillTo).toEqual({
      fullname: 'John Doe',
      address: {
        addressLine: 'Sieraadstraat 1',
        postcode: '1000 AA',
        city: 'Amsterdam'
      }
    });
  });
});
