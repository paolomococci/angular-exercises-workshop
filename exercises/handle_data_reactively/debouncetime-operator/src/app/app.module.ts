import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { UserDetailComponent } from './components/user-detail/user-detail.component'
import { LoaderComponent } from './components/loader/loader.component'
import { UserCardComponent } from './components/user-card/user-card.component'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
    LoaderComponent,
    UserCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
