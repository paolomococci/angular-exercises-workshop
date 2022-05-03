import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VcLogsComponent } from './components/vc-logs/vc-logs.component';
import { VersionControlComponent } from './components/version-control/version-control.component'

@NgModule({
  declarations: [
    AppComponent,
    VcLogsComponent,
    VersionControlComponent
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
