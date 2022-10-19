import { Component, OnInit, OnDestroy } from '@angular/core'

import { Subscription, interval } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription: Subscription | undefined

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

  outputDataStream: any = [];

  constructor() {}

  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }

  ngOnDestroy(): void {
    this.stopStream()
  }

  startStream(): void {
    const streamSource = interval(1000);
    this.subscription = streamSource.subscribe((input) => {
      this.outputDataStream.push(input)
      console.log('outputDataStream=>', input)
    });
  }

  stopStream(): void {
    this.subscription?.unsubscribe()
    this.subscription = undefined
  }
}
