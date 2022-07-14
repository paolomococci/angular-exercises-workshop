import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { KindComponent } from './components/kind/kind.component'
import { DialogContentComponent } from './components/dialog-content/dialog-content.component'
import { KindAnimationComponent } from './components/kind-animation/kind-animation.component'
import { KindSlowlyComponent } from './components/kind-slowly/kind-slowly.component'
import { DialogAnimationComponent } from './components/dialog-animation/dialog-animation.component'
import { InjectorComponent } from './components/injector/injector.component'
import { InjectedDataDialogComponent } from './components/injected-data-dialog/injected-data-dialog.component'
import { KindOverviewComponent } from './components/kind-overview/kind-overview.component'

import { MatCardModule } from '@angular/material/card'
import { MatSidenavModule } from '@angular/material/sidenav'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    KindComponent,
    NavbarComponent,
    DialogContentComponent,
    KindAnimationComponent,
    KindSlowlyComponent,
    DialogAnimationComponent,
    InjectorComponent,
    InjectedDataDialogComponent,
    KindOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
