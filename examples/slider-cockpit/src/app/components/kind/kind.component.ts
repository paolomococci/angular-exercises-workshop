import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  autoNotches: boolean = false
  disabled: boolean = false
  invert: boolean = false
  showNotches: boolean = false
  thumbLabel: boolean = false
  vertical: boolean = false

  min: number = 0
  max: number = 100
  value: number = 0
  step: number = 1
  notchInterval: number = 1


  constructor() { }

  ngOnInit(): void {
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showNotches)
      return this.autoNotches ? 'auto' : this.notchInterval
    return 0
  }

}
