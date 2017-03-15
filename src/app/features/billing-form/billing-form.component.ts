import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'billing-form',
  templateUrl: './billing-form.component.html'
})
export class BillingFormComponent implements OnInit {
  private submitted: boolean;
  sendBillTo: any;
  billingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.billingForm = this.formBuilder.group({
      fullname: '',
      address: this.formBuilder.group({
        addressLine: ['', Validators.required],
        postcode: ['', [Validators.required, Validators.pattern(/\d{4} ?[a-zA-Z]{2}/)]],
        city: ['', Validators.required]
      })
    });
  }

  onSubmit() {
    this.submitted  = true;
    this.sendBillTo = this.billingForm.value;
    console.log('Thank you for ordering!');
  }
}
