import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { ChirpingCardComponent } from './components/chirping-card/chirping-card.component'

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    SocialCardComponent,
    ChirpingCardComponent
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
