import { Component } from '@angular/core'
import {
  map,
  tap 
} from 'rxjs/operators'
import {
  interval, 
  partition,
  merge,
  Subscription
} from 'rxjs'

import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = environment.appTitle
  appId: string = environment.appId
}
