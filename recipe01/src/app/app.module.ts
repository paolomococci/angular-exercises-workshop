import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationButtonComponent,
    NotificationManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
