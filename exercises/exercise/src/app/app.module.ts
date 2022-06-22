import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


import { MainContentComponent } from './components/main-content/main-content.component'
import { RollerBlindMenuComponent } from './components/roller-blind-menu/roller-blind-menu.component'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    RollerBlindMenuComponent,
    MainContentComponent
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
