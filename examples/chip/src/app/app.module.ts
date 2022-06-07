import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { KindComponent } from './components/kind/kind.component'
import { MatChipsModule } from '@angular/material/chips'
import { KindAutocompleteComponent } from './components/kind-autocomplete/kind-autocomplete.component'
import { KindAvatarComponent } from './components/kind-avatar/kind-avatar.component'
import { KindDndComponent } from './components/kind-dnd/kind-dnd.component'
import { KindFormControlComponent } from './components/kind-form-control/kind-form-control.component'
import { KindInputComponent } from './components/kind-input/kind-input.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms'
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    KindComponent,
    KindAutocompleteComponent,
    KindAvatarComponent,
    KindDndComponent,
    KindFormControlComponent,
    KindInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
