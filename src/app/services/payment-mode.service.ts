import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentModeService {

  private url = '';
  
  constructor(private http: HttpClient) { }

  getPaymentModes() {
    return this.http.get(this.url);
  }
}
