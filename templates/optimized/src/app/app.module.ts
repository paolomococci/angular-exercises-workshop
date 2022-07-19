import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { VarietyComponent } from './components/variety/variety.component'

import { LoomModule } from './modules/loom/loom.module'
import { StuffingModule } from './modules/stuffing/stuffing.module'

import { HttpClientModule } from '@angular/common/http'
import { LayoutModule } from '@angular/cdk/layout'
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
    HttpClientModule,
    LayoutModule,
    StuffingModule,
    LoomModule,
    HelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
