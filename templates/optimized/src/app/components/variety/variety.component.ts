import {
  Component,
  OnInit
 } from '@angular/core'

 import { FormControl } from '@angular/forms'

 import { Observable } from 'rxjs'

 import {
  map,
  startWith
 } from 'rxjs/operators'

@Component({
  selector: 'app-variety',
  templateUrl: './variety.component.html',
  styleUrls: ['./variety.component.sass']
})
export class VarietyComponent implements OnInit {

  varietyControl = new FormControl('')

  options: string[] = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven'
  ]

  filteredOptions!: Observable<string[]>

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.varietyControl
      .valueChanges
      .pipe(
        startWith(''),
        map(
          value => this._filter(value || '')
        ),
      )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase()
    return this.options.filter(
      option => option
        .toLowerCase()
        .includes(filterValue)
    )
  }

}
