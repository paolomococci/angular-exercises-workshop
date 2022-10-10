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
