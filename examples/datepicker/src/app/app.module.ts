import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { KindComponent } from './components/kind/kind.component'
import { KindDateRangePickerComponent } from './components/kind-date-range-picker/kind-date-range-picker.component'
import { KindDateFilterValidationComponent } from './components/kind-date-filter-validation/kind-date-filter-validation.component'
import { KindDateMinMaxValidationComponent } from './components/kind-date-min-max-validation/kind-date-min-max-validation.component'
import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { KindStartDateComponent } from './components/kind-start-date/kind-start-date.component'

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'

@NgModule({
  declarations: [
    AppComponent,
    KindComponent,
    KindDateRangePickerComponent,
    KindDateFilterValidationComponent,
    KindDateMinMaxValidationComponent,
    KindStartDateComponent,
    MainComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
