import {
  Component,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-kind-date-filter-validation',
  templateUrl: './kind-date-filter-validation.component.html',
  styleUrls: ['./kind-date-filter-validation.component.sass']
})
export class KindDateFilterValidationComponent implements OnInit {

  weekday = (date: Date | null): boolean => {
    const day = (date || new Date()).getDay()
    return day !== 0 && day !== 6
  }

  constructor() { }

  ngOnInit(): void {
  }

}
