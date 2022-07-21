import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { VarietyComponent } from './components/variety/variety.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HelperModule } from './modules/helper/helper.module'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    VarietyComponent
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
