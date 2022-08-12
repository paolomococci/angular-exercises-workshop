import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MainComponent } from './components/main/main.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { KindComponent } from './components/kind/kind.component'
import { KindStylizedComponent } from './components/kind-stylized/kind-stylized.component'
import { KindCrudComponent } from './components/kind-crud/kind-crud.component'
import { KindDynamicallyComponent } from './components/kind-dynamically/kind-dynamically.component'
import { KindObservableComponent } from './components/kind-observable/kind-observable.component'
import { KindExpandableComponent } from './components/kind-expandable/kind-expandable.component'
import { KindFilteringComponent } from './components/kind-filtering/kind-filtering.component'
import { KindFooterComponent } from './components/kind-footer/kind-footer.component'
import { KindRetrieverComponent } from './components/kind-retriever/kind-retriever.component'

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
    KindStylizedComponent,
    KindCrudComponent,
    KindDynamicallyComponent,
    KindObservableComponent,
    KindExpandableComponent,
    KindFilteringComponent,
    KindFooterComponent,
    KindRetrieverComponent
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
