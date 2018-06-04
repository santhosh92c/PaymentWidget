import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentModeService {

  private url = 'https://api.paymentwall.com/api/payment-systems/?key=f692a43d2d98b43b0cda44b02e345bda&country_code=RU';
  
  constructor(private http: HttpClient) { }

  getPaymentModes() {
    return this.http.get(this.url);
  }
}
