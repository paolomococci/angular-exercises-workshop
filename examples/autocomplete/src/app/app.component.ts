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
export class AppComponent {
  title = 'autocomplete'

  formControl = new FormControl()

  options: string[] = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  filteredOptions!: Observable<string[]>

  ngOnInit() {}

  private _filter(value: string): string[] {
    return []
  }
}
