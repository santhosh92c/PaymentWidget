import { Component } from '@angular/core';
import { PaymentModeService } from '../services/payment-mode.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from './custom.validator';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  paymentModes$;
  paymentMode = {};
  form: FormGroup;

  constructor(private service: PaymentModeService, fb: FormBuilder) {
    this.paymentModes$ = this.service.getPaymentModes();

    this.form = fb.group({
      nameOnCard: ['',
        Validators.required
      ],
      cardNumber: ['',
        [Validators.required,
         CustomValidator.invalidCardNumber]
      ],
      expiryDate: ['',
        [Validators.required,
         CustomValidator.invalidDate]
      ],
      cvv: ['',
        [Validators.required,
         Validators.maxLength(3),
         Validators.minLength(3),
         CustomValidator.invalidCvv]
      ]
    })
  }

  modeSelected(mode) {
    this.paymentMode = mode;
  }

  pay() {
    console.log(this.form.value);
  }

  get nameOnCard() { return this.form.get('nameOnCard'); }
  get cardNumber() { return this.form.get('cardNumber'); }
  get expiryDate() { return this.form.get('expiryDate'); }
  get cvv() { return this.form.get('cvv'); }

}
