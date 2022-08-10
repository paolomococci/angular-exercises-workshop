import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { KindComponent } from './components/kind/kind.component'
import { KindVerticalComponent } from './components/kind-vertical/kind-vertical.component'
import { KindErrorComponent } from './components/kind-error/kind-error.component'
import { KindLinearComponent } from './components/kind-linear/kind-linear.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HelperModule } from './modules/helper/helper.module'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    KindComponent,
    KindVerticalComponent,
    KindErrorComponent,
    KindLinearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
