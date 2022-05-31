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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'autocomplete'

  control = new FormControl()

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
    this.filteredOptions = this.control.valueChanges.pipe(
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
