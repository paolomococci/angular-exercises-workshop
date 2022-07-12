import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'

import { MainComponent } from './components/main/main.component'
import { KindComponent } from './components/kind/kind.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    KindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
