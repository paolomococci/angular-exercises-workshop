import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { VarietyComponent } from './components/variety/variety.component'

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
