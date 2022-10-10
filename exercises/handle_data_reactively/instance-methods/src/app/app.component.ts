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

  subscription: Subscription | undefined
  inputStreamDataOne: number[] = [1,2,3,4,5,6,7,8,9]
  inputStreamDataTwo: string[] = ['one','two','three','four','five','six','seven','eight','nine']
}
