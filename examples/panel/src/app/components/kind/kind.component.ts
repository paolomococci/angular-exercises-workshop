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

  step: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index
  }

  nextStep() {
    this.step++
  }

  previousStep() {
    this.step--
  }

}
