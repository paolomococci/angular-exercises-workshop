import {
  Component,
  OnInit
} from '@angular/core'

import {
  FormGroup,
  FormControl
} from '@angular/forms'

@Component({
  selector: 'app-kind-date-range-picker',
  templateUrl: './kind-date-range-picker.component.html',
  styleUrls: ['./kind-date-range-picker.component.sass']
})
export class KindDateRangePickerComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
