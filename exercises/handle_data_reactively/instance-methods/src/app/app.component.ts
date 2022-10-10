import {
  Component
} from '@angular/core'
import {
  map,
  merge
} from 'rxjs/operators'
import {
  Subscription,
  interval
} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'Instance Methods'
  appId: string = '1F5'
}
