import { Component } from '@angular/core'
import { environment } from './../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = environment.appTitle
  appId: string = environment.appId
}
