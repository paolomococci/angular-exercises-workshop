import {
  Component,
  OnInit
} from '@angular/core'

import { interval } from 'rxjs'
import { ThemePalette } from '@angular/material/core'
import { ProgressBarMode } from '@angular/material/progress-bar'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})

export class KindComponent implements OnInit {

  themePalette: ThemePalette = 'primary'
  progressBarMode: ProgressBarMode = 'determinate'
  progressBarValue:number = 50
  currentSeconds: number = 0
  progressBarBufferValue: number = 75


  constructor() { }

  ngOnInit(): void {
  }

  startTimer(seconds: number): void {
    const timer$ = interval(1000)
    const sub = timer$.subscribe((sec: number) => {
      this.progressBarValue = this.progressBarValue - sec * 100 / seconds
      this.currentSeconds = sec
      if (this.currentSeconds === seconds) {
        sub.unsubscribe()
      }
    })
  }

  startTimerVisibility(): boolean {
    return (this.progressBarValue > 0 && this.progressBarMode === 'determinate')
  }

}
