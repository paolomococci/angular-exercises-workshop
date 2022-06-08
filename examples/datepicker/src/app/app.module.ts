import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { KindComponent } from './components/kind/kind.component'
import { KindDateRangePickerComponent } from './components/kind-date-range-picker/kind-date-range-picker.component'
import { KindDateFilterValidationComponent } from './components/kind-date-filter-validation/kind-date-filter-validation.component'
import { KindDateMinMaxValidationComponent } from './components/kind-date-min-max-validation/kind-date-min-max-validation.component'
import { KindStartDateComponent } from './components/kind-start-date/kind-start-date.component'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core'

@NgModule({
  declarations: [
    AppComponent,
    KindComponent,
    KindDateRangePickerComponent,
    KindDateFilterValidationComponent,
    KindDateMinMaxValidationComponent,
    KindStartDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
