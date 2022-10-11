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

  inputDataStreamOne: number[] = [1,2,3,4,5,6,7,8,9]
  inputDataStreamTwo: string[] = ['one','two','three','four','five','six','seven','eight','nine']

  outputDataStream = []

  startStream(): void {
    const streamSourceOne = interval(1500)
    const streamSourceTwo = interval(1000)
      .pipe(
        map(
          (output) => output % this.inputDataStreamTwo.length
        ),
        map(
          (index) => this.inputDataStreamTwo[index]
        )
      )

    this.subscription = streamSourceOne
      .pipe(
        map(
          (output) => output % this.inputDataStreamOne.length
        ),
        map(
          (index) => this.inputDataStreamOne[index]
        ),
        merge(streamSourceTwo)
      )
      .subscribe(
        (element) => {
          this.outputDataStream.push(element)
        }
      )
  }

  stopStream(): void {}

}
