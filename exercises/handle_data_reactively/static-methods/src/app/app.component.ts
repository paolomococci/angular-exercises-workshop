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
import { Movie } from './model/movie.model'
import { Data } from './repo/data.repo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = environment.appTitle
  appId: string = environment.appId

  inputDataStream: Movie[] = Data.movies
  outputDataStream: any[] = []
  comedy: any[] = []
  detective: any[] = []

  startStream(): void {}

  stopStream(): void {}
}
