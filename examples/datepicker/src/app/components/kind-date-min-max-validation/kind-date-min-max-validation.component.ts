import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-kind-date-min-max-validation',
  templateUrl: './kind-date-min-max-validation.component.html',
  styleUrls: ['./kind-date-min-max-validation.component.sass']
})
export class KindDateMinMaxValidationComponent implements OnInit {

  minDate!: Date
  maxDate!: Date

  constructor() {
  const currentYear = new Date().getFullYear()

  this.minDate = new Date(currentYear - 0, 0, 1)
  this.maxDate = new Date(currentYear + 0, 11, 31)
  }

  ngOnInit(): void {
  }

}
