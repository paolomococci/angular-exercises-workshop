import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core'

import {
  Observable,
  merge,
  map,
  takeWhile,
  interval 
} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, OnDestroy {

  isComponentAlive!: boolean

  streamsOutput$: Observable<number[]> | undefined

  inputDataStream: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]

  outputDataStream: any = []

  constructor() {}

  ngOnInit(): void {
    this.isComponentAlive = true
    this.startStream()
  }

  ngOnDestroy(): void {
    this.stopStream()
  }

  startStream(): void {
    const streamSourceOne = interval(700)
    const streamSourceTwo = interval(1400)
    const streamSourceThree = interval(2100)
    this.streamsOutput$ = merge(
      streamSourceOne,
      streamSourceTwo,
      streamSourceThree
    ).pipe(
      takeWhile(
        () => !! this.isComponentAlive
      ),
      map(
        (output) => {
          console.log(output)
          this.outputDataStream = [
            ...this.outputDataStream,
            output
          ]
          return this.outputDataStream
        }
      )
    )
  }

  stopStream(): void {
    this.isComponentAlive = false
  }
}
