import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgxWigModule } from 'ngx-wig'

import { AppComponent } from './app.component'

import { MainComponent } from './components/main/main.component'
import { EditorComponent } from './components/editor/editor.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    NgxWigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
