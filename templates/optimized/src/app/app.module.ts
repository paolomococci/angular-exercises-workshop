import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { A11yModule } from '@angular/cdk/a11y'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CdkAccordionModule } from '@angular/cdk/accordion'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { PortalModule } from '@angular/cdk/portal'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { CdkStepperModule } from '@angular/cdk/stepper'
import { CdkTableModule } from '@angular/cdk/table'
import { CdkTreeModule } from '@angular/cdk/tree'
import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'
import { DialogModule } from '@angular/cdk/dialog'

import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { VarietyComponent } from './components/variety/variety.component'
import { HttpClientModule } from '@angular/common/http'
import { LayoutModule } from '@angular/cdk/layout'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    VarietyComponent
  ],
  imports: [
    A11yModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    ClipboardModule,
    DialogModule,
    DragDropModule,
    HttpClientModule,
    LayoutModule,
    OverlayModule,
    PortalModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
