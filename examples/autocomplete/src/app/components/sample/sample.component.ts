import {
  Component,
  OnInit
} from '@angular/core'

import { FormControl } from '@angular/forms'
import {Observable} from 'rxjs'
import {
  map,
  startWith
} from 'rxjs/operators'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.sass']
})
export class SampleComponent implements OnInit {

  constructor() { }

  sampleControl: FormControl = new FormControl()

  options: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
  ]

  filteredOptions!: Observable<string[]>

  ngOnInit() {
    this.filteredOptions = this.sampleControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(
      option => option.toLowerCase().includes(
        filterValue
      )
    )
  }

}
