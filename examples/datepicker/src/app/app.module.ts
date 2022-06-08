import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { KindComponent } from './components/kind/kind.component';
import { KindDateRangePickerComponent } from './components/kind-date-range-picker/kind-date-range-picker.component';
import { KindDateFilterValidationComponent } from './components/kind-date-filter-validation/kind-date-filter-validation.component'

@NgModule({
  declarations: [
    AppComponent,
    KindComponent,
    KindDateRangePickerComponent,
    KindDateFilterValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
