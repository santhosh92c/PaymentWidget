import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { PaymentModeService } from './services/payment-mode.service';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    NumberOnlyDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PaymentModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
